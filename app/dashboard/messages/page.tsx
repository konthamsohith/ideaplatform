"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/context/AuthContext";
// ── Icons ──────────────────────────────────────────────────────────
const IconSend = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
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
type Message = { id: number; from: 'me' | 'them'; text: string; time: string; };
type Chat = { id: number; name: string; role: string; tag: 'co-founder' | 'ai' | 'investor'; lastMsg: string; time: string; unread: number; messages: Message[]; };

const INITIAL_CHATS: Chat[] = [
    {
        id: 1, name: "Sohith", role: "Co-founder", tag: "co-founder",
        lastMsg: "Let's review the mockups tomorrow.", time: "2m ago", unread: 2,
        messages: [
            { id: 1, from: 'them', text: "Hey! Have you pushed the latest design updates?", time: "09:12 AM" },
            { id: 2, from: 'me', text: "Yes, just pushed. Check the investor portal — complete rebuild.", time: "09:15 AM" },
            { id: 3, from: 'them', text: "Looks incredible. The cap table modal is 🔥", time: "09:18 AM" },
            { id: 4, from: 'them', text: "Let's review the mockups tomorrow.", time: "09:20 AM" },
        ]
    },
    {
        id: 2, name: "TWONNECT Assistant", role: "AI Collaborator", tag: "ai",
        lastMsg: "I've refined your problem statement...", time: "1h ago", unread: 0,
        messages: [
            { id: 1, from: 'them', text: "Hello! I've analyzed your latest idea submission.", time: "08:00 AM" },
            { id: 2, from: 'them', text: "I've refined your problem statement to improve clarity and investor appeal.", time: "08:01 AM" },
            { id: 3, from: 'me', text: "Show me the refined version.", time: "08:05 AM" },
            { id: 4, from: 'them', text: "Twonnect enables distributed teams to co-create ventures by validating ideas through structured peer review and aligned capital deployment. It reduces founder isolation by connecting complementary skill sets.", time: "08:06 AM" },
        ]
    },
    {
        id: 3, name: "Investor Group #4", role: "Seed Stage LP", tag: "investor",
        lastMsg: "We are interested in your recent pilot...", time: "5h ago", unread: 1,
        messages: [
            { id: 1, from: 'them', text: "We've reviewed your Q1 metrics. Strong data volume growth.", time: "03:00 AM" },
            { id: 2, from: 'them', text: "We are interested in your recent pilot — could we schedule a call this week?", time: "03:05 AM" },
        ]
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
    const [chats, setChats] = useState<Chat[]>(INITIAL_CHATS);
    const [activeChatId, setActiveChatId] = useState<number | null>(null);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!user) return;
        const storageKey = `twonnect_messages_${user.id}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setChats(parsed);
            } catch (e) {
                console.error("Failed to load messages", e);
            }
        }
        setIsLoaded(true);
    }, [user]);

    useEffect(() => {
        if (isLoaded && user) {
            const storageKey = `twonnect_messages_${user.id}`;
            localStorage.setItem(storageKey, JSON.stringify(chats));
        }
    }, [chats, isLoaded, user]);

    const activeChat = chats.find(c => c.id === activeChatId) ?? null;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [activeChat?.messages.length]);

    const selectChat = (id: number) => {
        setActiveChatId(id);
        setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    };

    const handleDeleteChat = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setChats(prev => prev.filter(c => c.id !== id));
        if (activeChatId === id) {
            setActiveChatId(null);
        }
    };

    const sendMessage = async () => {
        if (!input.trim() || !activeChatId || isTyping) return;
        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const userText = input.trim();
        const newMsg: Message = { id: Date.now(), from: 'me', text: userText, time: now };

        setChats(prev => prev.map(c => c.id === activeChatId
            ? { ...c, messages: [...c.messages, newMsg], lastMsg: userText, time: 'Just now' }
            : c
        ));
        setInput("");

        const currentActiveChat = chats.find(c => c.id === activeChatId);

        // If talking to AI
        if (currentActiveChat?.tag === 'ai') {
            setIsTyping(true);
            try {
                const apiMessages = [...currentActiveChat.messages, newMsg].map(m => ({
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
                        ? { ...c, messages: [...c.messages, aiMsg], lastMsg: "New response from AI", time: 'Just now', unread: 0 }
                        : c
                    ));
                }
            } catch (error) {
                console.error("AI chat error", error);
            } finally {
                setIsTyping(false);
            }
        }
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
                                            <span className="chat-time">{chat.time}</span>
                                        </div>
                                        <div className="chat-meta">
                                            <span className="chat-preview">{chat.lastMsg}</span>
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
                            <div className={`chat-tag-pill tag-${activeChat.tag}`}>
                                {activeChat.tag === 'ai' ? 'AI' : activeChat.tag === 'investor' ? 'Investor' : 'Co-founder'}
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="messages-area">
                            {activeChat.messages.map(msg => (
                                <div key={msg.id} className={`msg-row ${msg.from === 'me' ? 'msg-me' : 'msg-them'}`}>
                                    {msg.from === 'them' && (
                                        <div className="avatar sm" style={{ background: getAvatar(activeChat.tag).bg, color: getAvatar(activeChat.tag).color }}>
                                            {getAvatar(activeChat.tag).icon}
                                        </div>
                                    )}
                                    <div className="bubble-wrap">
                                        <div className={`bubble ${msg.from === 'me' ? 'bubble-me' : 'bubble-them'}`}>
                                            {activeChat.tag === 'ai' && msg.from === 'them' ? (
                                                <div className="markdown-content"><ReactMarkdown>{msg.text}</ReactMarkdown></div>
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                        <span className="msg-time">{msg.time}</span>
                                    </div>
                                </div>
                            ))}
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
                            <button className="btn-send" onClick={sendMessage} disabled={!input.trim() || isTyping}>
                                <IconSend /> <span>Send</span>
                            </button>
                        </div>
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
