"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/context/AuthContext";
import dynamic from 'next/dynamic';
import { supabase } from "@/lib/supabase";
import { Chat, ChatMessage, getChats, getMessages, sendChatMessage } from "@/lib/supabase-db";

const VideoCallUI = dynamic(() => import('@/app/components/VideoCallUI'), { ssr: false });
// ── Icons ──────────────────────────────────────────────────────────
const IconSend = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);
const IconVideo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
);
const IconPhone = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const IconSearch = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);
const IconMessage = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);
const IconBot = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><line x1="12" y1="3" x2="12" y2="7" /><circle cx="9" cy="16" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
);
const IconUsers = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
const IconBriefcase = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);
const IconTrash = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

// ── Types & Seed Data ──────────────────────────────────────────────
const INITIAL_CHATS: Chat[] = [
    {
        id: 1, name: "Sohith", role: "Co-founder", tag: "co-founder",
        updated_at: new Date().toISOString(), created_at: new Date().toISOString(), unread: 2
    },
    {
        id: 2, name: "TWONNECT Assistant", role: "AI Collaborator", tag: "ai",
        updated_at: new Date(Date.now() - 3600000).toISOString(), created_at: new Date(Date.now() - 3600000).toISOString(), unread: 0
    },
    {
        id: 3, name: "Investor Group #4", role: "Seed Stage LP", tag: "investor",
        updated_at: new Date(Date.now() - 86400000).toISOString(), created_at: new Date(Date.now() - 86400000).toISOString(), unread: 1
    },
];

function getAvatar(tag: Chat['tag']) {
    if (tag === 'ai') return { icon: <IconBot />, color: '#7c3aed', bg: '#ede9fe' };
    if (tag === 'investor') return { icon: <IconBriefcase />, color: '#0369a1', bg: '#e0f2fe' };
    return { icon: <IconUsers />, color: '#059669', bg: '#d1fae5' };
}

// ── Component ──────────────────────────────────────────────────────
export default function MessagesPage() {
    const { user } = useAuth();
    const [chats, setChats] = useState<Chat[]>([]);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [activeChatId, setActiveChatId] = useState<number | null>(null);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [callMode, setCallMode] = useState<"none" | "video" | "audio">("none");
    const [roomID, setRoomID] = useState<string>("");
    const messagesEndRef = useRef<HTMLDivElement>(null);



    const activeChat = chats.find(c => c.id === activeChatId) ?? null;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages.length]);

    // Fetch initial chat list or fallback to seed
    useEffect(() => {
        const loadChats = async () => {
            const data = await getChats();
            if (data && data.length > 0) {
                setChats(data);
            } else {
                setChats(INITIAL_CHATS); // Fallback if DB table is missing or empty
            }
        };
        loadChats();
    }, []);

    // Fetch messages when a chat is selected
    useEffect(() => {
        if (!activeChatId) return;

        const loadMessages = async () => {
            const data = await getMessages(activeChatId);
            setMessages(data);
        };
        loadMessages();

        // Subscribe to real-time new messages
        const channel = supabase
            .channel(`public:messages:chat_${activeChatId}`)
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `chat_id=eq.${activeChatId}` }, (payload) => {
                setMessages(prev => [...prev, payload.new as ChatMessage]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [activeChatId]);

    const selectChat = (id: number) => {
        setActiveChatId(id);
        setCallMode("none");
        setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    };

    const handleDeleteChat = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setChats(prev => prev.filter(c => c.id !== id));
        if (activeChatId === id) {
            setActiveChatId(null);
        }
    };

    const startCall = (type: "video" | "audio") => {
        if (!activeChatId) return;
        const newRoomID = `room_${activeChatId}_${Math.floor(Math.random() * 10000)}`;
        setRoomID(newRoomID);
        setCallMode(type);
    };

    const sendMessage = async () => {
        if (!input.trim() || !activeChatId || isTyping) return;

        const currentActiveChat = chats.find(c => c.id === activeChatId);

        if (currentActiveChat?.tag === 'ai') {
            setIsTyping(true);
            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const userText = input.trim();
            // Using the type Message for AI chat flow, as DB does not support AI routing directly yet
            type Message = { id: number; from: 'me' | 'them'; text: string; time: string; };
            const newMsg: Message = { id: Date.now(), from: 'me', text: userText, time: now };

            setChats(prev => prev.map(c => c.id === activeChatId
                ? { ...c, messages: [...((c as any).messages || []), newMsg], lastMsg: userText, time: 'Just now' }
                : c
            ));
            setInput("");

            try {
                const apiMessages = [...((currentActiveChat as any).messages || []), newMsg].map((m: any) => ({
                    role: m.from === 'me' ? 'user' : 'assistant',
                    content: m.text
                }));

                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ messages: apiMessages }),
                });

                const data = await response.json();

                if (data.reply) {
                    const aiNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const aiMsg: Message = { id: Date.now() + 1, from: 'them', text: data.reply, time: aiNow };
                    setChats(prev => prev.map(c => c.id === activeChatId
                        ? { ...c, messages: [...((c as any).messages || []), aiMsg], lastMsg: "New response from AI", time: 'Just now', unread: 0 }
                        : c
                    ));
                }
            } catch (error) {
                console.error("AI chat error", error);
            } finally {
                setIsTyping(false);
            }
        } else {
            const text = input.trim();
            setInput(""); // Optimistically clear input

            await sendChatMessage(activeChatId, text, "me");

            // Also update local chats array so preview updates
            setChats(prev => prev.map(c => c.id === activeChatId
                ? { ...c, updated_at: new Date().toISOString() }
                : c
            ));
        }

    };

    const formatTime = (isoString?: string) => {
        if (!isoString) return "";
        return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const filteredChats = chats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="messages-root">
            {/* ── SIDEBAR ── */}
            <aside className="msg-sidebar">
                <div className="sidebar-top">
                    <h2 className="sidebar-title">Messages</h2>
                    <div className="search-wrap">
                        <IconSearch />
                        <input
                            className="search-input"
                            placeholder="Search conversations..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="chat-list">
                    {filteredChats.map(chat => {
                        const av = getAvatar(chat.tag);
                        return (
                            <div key={chat.id} className={`chat-item-wrapper ${activeChatId === chat.id ? 'active' : ''}`}>
                                <button
                                    className="chat-item"
                                    onClick={() => selectChat(chat.id)}
                                >
                                    <div className="avatar" style={{ background: av.bg, color: av.color }}>{av.icon}</div>
                                    <div className="chat-info">
                                        <div className="chat-meta">
                                            <span className="chat-name">{chat.name}</span>
                                            <span className="chat-time">{formatTime(chat.updated_at)}</span>
                                        </div>
                                        <div className="chat-meta">
                                            <span className="chat-preview">{chat.tag === 'ai' ? (chat as any).lastMsg : "Active Conversation"}</span>
                                            {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                                        </div>
                                    </div>
                                </button>
                                <button onClick={(e) => handleDeleteChat(e, chat.id)} className="btn-delete-msg">
                                    <IconTrash />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </aside>

            {/* ── CHAT PANEL ── */}
            <main className="msg-main">
                {activeChat ? (
                    <>
                        {/* Header */}
                        <div className="chat-header">
                            <div className="chat-header-left">
                                <div className="avatar" style={{ background: getAvatar(activeChat.tag).bg, color: getAvatar(activeChat.tag).color }}>
                                    {getAvatar(activeChat.tag).icon}
                                </div>
                                <div>
                                    <div className="ch-name">{activeChat.name}</div>
                                    <div className="ch-role">{activeChat.role}</div>
                                </div>
                            </div>
                            <div className="chat-header-right">
                                <button className="btn-call" onClick={() => startCall("audio")} title="Start Voice Call"><IconPhone /></button>
                                <button className="btn-call" onClick={() => startCall("video")} title="Start Video Call"><IconVideo /></button>
                                <div className={`chat-tag-pill tag-${activeChat.tag}`}>
                                    {activeChat.tag === 'ai' ? 'AI' : activeChat.tag === 'investor' ? 'Investor' : 'Co-founder'}
                                </div>
                            </div>
                        </div>

                        {callMode !== "none" ? (
                            <div className="call-container">
                                <VideoCallUI
                                    roomID={roomID}
                                    userID={`user_${Math.floor(Math.random() * 10000)}`}
                                    userName={"Current User"}
                                    mode={callMode === "video" ? "OneONoneCall" : "OneONoneCall"}
                                />
                                <button className="btn-end-call" onClick={() => setCallMode("none")}>End Call</button>
                            </div>
                        ) : (
                            <>
                                {/* Messages */}
                                <div className="messages-area">
                                    {
                                        activeChat.tag !== 'ai' ? messages.map(msg => (
                                            <div key={msg.id} className={`msg-row ${msg.sender_id === 'me' ? 'msg-me' : 'msg-them'}`}>
                                                {msg.sender_id !== 'me' && (
                                                    <div className="avatar sm" style={{ background: getAvatar(activeChat.tag).bg, color: getAvatar(activeChat.tag).color }}>
                                                        {getAvatar(activeChat.tag).icon}
                                                    </div>
                                                )}
                                                <div className="bubble-wrap">
                                                    <div className={`bubble ${msg.sender_id === 'me' ? 'bubble-me' : 'bubble-them'}`}>{msg.text}</div>
                                                    <span className="msg-time">{formatTime(msg.created_at)}</span>
                                                </div>
                                            </div>
                                        )) : (activeChat as any).messages?.map((msg: any) => (
                                            <div key={msg.id} className={`msg-row ${msg.from === 'me' ? 'msg-me' : 'msg-them'}`}>
                                                {msg.from === 'them' && (
                                                    <div className="avatar sm" style={{ background: getAvatar(activeChat.tag).bg, color: getAvatar(activeChat.tag).color }}>
                                                        {getAvatar(activeChat.tag).icon}
                                                    </div>
                                                )}
                                                <div className="bubble-wrap">
                                                    <div className={`bubble ${msg.from === 'me' ? 'bubble-me' : 'bubble-them'}`}>
                                                        {msg.from === 'them' ? (
                                                            <div className="markdown-content"><ReactMarkdown>{msg.text}</ReactMarkdown></div>
                                                        ) : (
                                                            msg.text
                                                        )}
                                                    </div>
                                                    <span className="msg-time">{msg.time}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {isTyping && activeChat.tag === 'ai' && (
                                        <div className="msg-row msg-them">
                                            <div className="avatar sm" style={{ background: getAvatar(activeChat.tag).bg, color: getAvatar(activeChat.tag).color }}>
                                                {getAvatar(activeChat.tag).icon}
                                            </div>
                                            <div className="bubble-wrap">
                                                <div className="bubble bubble-them typing-indicator-bubble">
                                                    <span></span><span></span><span></span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Compose */}
                                <div className="compose-bar">
                                    <input
                                        className="compose-input"
                                        placeholder="Type a message..."
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                sendMessage();
                                            }
                                        }} />
                                    <button className="btn-send" onClick={sendMessage} disabled={!input.trim()}>
                                        <IconSend /> <span>Send</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="empty-state">
                        <div className="empty-icon"><IconMessage /></div>
                        <h3>Select a conversation</h3>
                        <p>Connect with co-founders, collaborators, and mentors.</p>
                    </div>
                )}
            </main>

            <style jsx>{`
                .messages-root {
                    display: flex;
                    height: calc(100vh - 80px);
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    margin: 0;
                }

                /* ── SIDEBAR ── */
                .msg-sidebar {
                    width: 300px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    border-right: 1px solid #e5e7eb;
                    background: #fafafa;
                }
                .sidebar-top {
                    padding: 1.5rem 1.25rem 1rem;
                    border-bottom: 1px solid #e5e7eb;
                }
                .sidebar-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #111827;
                    margin: 0 0 1rem 0;
                    letter-spacing: -0.01em;
                }
                .search-wrap {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f3f4f6;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    padding: 8px 12px;
                    color: #9ca3af;
                }
                .search-input {
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 0.85rem;
                    color: #111827;
                    width: 100%;
                }
                .search-input::placeholder { color: #9ca3af; }

                .chat-list {
                    flex: 1;
                    overflow-y: auto;
                }
                .chat-item-wrapper {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #f3f4f6;
                    background: transparent;
                    transition: background 0.15s;
                }
                .chat-item-wrapper:hover { background: #f3f4f6; }
                .chat-item-wrapper.active { background: #f0f9ff; border-left: 2px solid #111827; }

                .chat-item {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                    padding: 1rem 1.25rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    flex: 1;
                    min-width: 0;
                }
                .btn-delete-msg {
                    background: transparent;
                    border: none;
                    color: #9ca3af;
                    padding: 0.5rem;
                    cursor: pointer;
                    border-radius: 6px;
                    margin-right: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    opacity: 0;
                }
                .chat-item-wrapper:hover .btn-delete-msg {
                    opacity: 1;
                }
                .btn-delete-msg:hover {
                    color: #ef4444;
                    background: #fee2e2;
                }

                .avatar {
                    width: 40px; height: 40px;
                    border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .avatar.sm { width: 32px; height: 32px; border-radius: 8px; }

                .chat-info { flex: 1; min-width: 0; }
                .chat-meta { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
                .chat-name { font-size: 0.875rem; font-weight: 600; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .chat-time { font-size: 0.7rem; color: #9ca3af; flex-shrink: 0; }
                .chat-preview { font-size: 0.8rem; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; margin-top: 2px; }
                .unread-badge {
                    background: #111827; color: #fff;
                    font-size: 0.65rem; font-weight: 700;
                    padding: 2px 6px; border-radius: 10px;
                    flex-shrink: 0;
                }

                /* ── MAIN PANEL ── */
                .msg-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    background: #ffffff;
                }

                .chat-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid #e5e7eb;
                    background: #ffffff;
                }
                .chat-header-left { display: flex; align-items: center; gap: 0.875rem; }
                .ch-name { font-size: 0.95rem; font-weight: 700; color: #111827; }
                .ch-role { font-size: 0.75rem; color: #6b7280; font-weight: 500; margin-top: 1px; }

                .chat-header-right { display: flex; align-items: center; gap: 0.75rem; }
                
                .btn-call {
                    width: 36px; height: 36px; border-radius: 8px;
                    display: flex; align-items: center; justify-content: center;
                    background: transparent; border: 1px solid #e5e7eb; color: #4b5563;
                    cursor: pointer; transition: all 0.2s;
                }
                .btn-call:hover { background: #f3f4f6; color: #111827; border-color: #d1d5db; }

                .call-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: #111827;
                    position: relative;
                }
                .btn-end-call {
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #ef4444; color: white;
                    border: none; border-radius: 20px;
                    padding: 10px 24px; font-weight: 600; cursor: pointer;
                    z-index: 10; font-size: 0.9rem;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                    transition: background 0.2s;
                }
                .btn-end-call:hover { background: #dc2626; }

                .chat-tag-pill {
                    font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
                    padding: 4px 10px; border-radius: 4px; border: 1px solid;
                }
                .tag-co-founder { background: #d1fae5; color: #065f46; border-color: #6ee7b7; }
                .tag-ai { background: #ede9fe; color: #5b21b6; border-color: #c4b5fd; }
                .tag-investor { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }

                .messages-area {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    background: #f9fafb;
                }

                .msg-row {
                    display: flex;
                    align-items: flex-end;
                    gap: 0.625rem;
                }
                .msg-me {
                    flex-direction: row-reverse;
                }

                .bubble-wrap { display: flex; flex-direction: column; max-width: 65%; }
                .msg-me .bubble-wrap { align-items: flex-end; }

                .bubble {
                    padding: 0.75rem 1rem;
                    border-radius: 16px;
                    font-size: 0.9rem;
                    line-height: 1.5;
                }
                .bubble-them {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    color: #111827;
                    border-bottom-left-radius: 4px;
                }
                .bubble-me {
                    background: #111827;
                    color: #ffffff;
                    border-bottom-right-radius: 4px;
                }
                .msg-time {
                    font-size: 0.65rem;
                    color: #9ca3af;
                    margin-top: 4px;
                    padding: 0 4px;
                }

                /* ── COMPOSE ── */
                .compose-bar {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-top: 1px solid #e5e7eb;
                    background: #ffffff;
                }
                .compose-input {
                    flex: 1;
                    border: 1px solid #d1d5db;
                    border-radius: 10px;
                    padding: 0.75rem 1rem;
                    font-size: 0.9rem;
                    color: #111827;
                    outline: none;
                    font-family: inherit;
                    background: #f9fafb;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .compose-input:focus { border-color: #111827; box-shadow: 0 0 0 1px #111827; background: #ffffff; }
                .compose-input::placeholder { color: #9ca3af; }

                .btn-send {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.25rem;
                    background: #111827;
                    color: #ffffff;
                    border: none;
                    border-radius: 10px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                }
                .btn-send:hover:not(:disabled) { background: #374151; }
                .btn-send:disabled { opacity: 0.4; cursor: not-allowed; }

                /* ── TYPING INDICATOR & MARKDOWN ── */
                .typing-indicator-bubble {
                    display: inline-flex; align-items: center; gap: 4px; padding: 0.75rem 1rem;
                }
                .typing-indicator-bubble span {
                    display: block; width: 6px; height: 6px; background: #9ca3af; border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out both;
                }
                .typing-indicator-bubble span:nth-child(1) { animation-delay: -0.32s; }
                .typing-indicator-bubble span:nth-child(2) { animation-delay: -0.16s; }
                @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
                
                .markdown-content :global(p) { margin-bottom: 0.5rem; }
                .markdown-content :global(strong) { font-weight: 700; }
                .markdown-content :global(ul), .markdown-content :global(ol) { padding-left: 1.5rem; margin-bottom: 0.5rem; }

                /* ── EMPTY STATE ── */
                .empty-state {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #6b7280;
                    gap: 0.75rem;
                }
                .empty-icon {
                    width: 64px; height: 64px;
                    background: #f3f4f6;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    color: #9ca3af;
                }
                .empty-state h3 { font-size: 1rem; font-weight: 600; color: #111827; margin: 0; }
                .empty-state p { font-size: 0.875rem; color: #6b7280; margin: 0; }

                @media (max-width: 768px) {
                    .msg-sidebar { width: 100%; }
                    .messages-root { flex-direction: column; }
                }
            `}</style>
        </div>
    );
}
