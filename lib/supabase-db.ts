import { supabase } from "./supabase";

export interface Profile {
    id: string;
    email: string | null;
    display_name: string | null;
    photo_url: string | null;
    last_login: string;
}

export interface Idea {
    id?: string;
    author_id: string;
    title: string;
    description: string;
    impact: string;
    status: "Draft" | "Refinement" | "Collaborative";
    collaborators: number;
    created_at: string;
    author_name: string;
    target_audience?: "Developer" | "Investor";
    valuation?: string;
    funding_required?: string;
    equity_offered?: string;
}

export interface Chat {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    role: string;
    tag: 'co-founder' | 'ai' | 'investor';
    unread: number;
}

export interface ChatMessage {
    id: number;
    chat_id: number;
    sender_id: string;
    text: string;
    created_at: string;
}

/**
 * Fetches a user profile from Supabase.
 */
export const getUserProfile = async (uid: string) => {
    if (!supabase) return null;
    try {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", uid)
            .single();

        if (error) throw error;
        return data as Profile;
    } catch (error) {
        console.error("Error fetching user profile:", JSON.stringify(error, null, 2));
        return null;
    }
};

/**
 * Updates a user profile in Supabase.
 */
export const updateUserProfile = async (uid: string, data: Partial<Profile>) => {
    if (!supabase) return;
    try {
        const { error } = await supabase
            .from("profiles")
            .update(data)
            .eq("id", uid);

        if (error) throw error;
    } catch (error) {
        console.error("Error updating user profile:", JSON.stringify(error, null, 2));
        throw error;
    }
};

/**
 * Creates a new idea in the 'ideas' table.
 */
export const createIdea = async (ideaData: Omit<Idea, "id" | "created_at" | "collaborators">) => {
    if (!supabase) throw new Error("Supabase not initialized");
    try {
        const { data, error } = await supabase
            .from("ideas")
            .insert([
                {
                    ...ideaData,
                    collaborators: 0,
                    created_at: new Date().toISOString()
                }
            ])
            .select()
            .single();

        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error("Error creating idea:", JSON.stringify(error, null, 2));
        throw error;
    }
};

/**
 * Fetches all ideas for the marketplace.
 */
export const getAllIdeas = async (limit?: number) => {
    if (!supabase) return [];
    try {
        let query = supabase
            .from("ideas")
            .select("*")
            .order("created_at", { ascending: false });

        if (limit) {
            query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        return data as Idea[];
    } catch (error) {
        console.error("Error fetching all ideas:", JSON.stringify(error, null, 2));
        return [];
    }
};

/**
 * Fetches ideas submitted by a specific user.
 */
export const getUserIdeas = async (uid: string) => {
    if (!supabase) return [];
    try {
        const { data, error } = await supabase
            .from("ideas")
            .select("*")
            .eq("author_id", uid)
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data as Idea[];
    } catch (error) {
        console.error("Error fetching user ideas:", JSON.stringify(error, null, 2));
        return [];
    }
};

/**
 * Updates an existing idea.
 */
export const updateIdea = async (id: string, ideaData: Partial<Idea>) => {
    if (!supabase) throw new Error("Supabase not initialized");
    try {
        const { error } = await supabase
            .from("ideas")
            .update(ideaData)
            .eq("id", id);

        if (error) throw error;
    } catch (error) {
        console.error("Error updating idea:", JSON.stringify(error, null, 2));
        throw error;
    }
};

/**
 * Deletes an idea.
 */
export const deleteIdea = async (id: string) => {
    if (!supabase) throw new Error("Supabase not initialized");
    try {
        const { error } = await supabase
            .from("ideas")
            .delete()
            .eq("id", id);

        if (error) throw error;
    } catch (error) {
        console.error("Error deleting idea:", JSON.stringify(error, null, 2));
        throw error;
    }
};
/**
 * Fetches all ideas marked as 'Collaborative'.
 */
export const getCollaborativeIdeas = async () => {
    if (!supabase) return [];
    try {
        const { data, error } = await supabase
            .from("ideas")
            .select("*")
            .eq("status", "Collaborative")
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data as Idea[];
    } catch (error) {
        console.error("Error fetching collaborative ideas:", JSON.stringify(error, null, 2));
        return [];
    }
};

/**
 * Fetches all chats.
 */
export const getChats = async () => {
    if (!supabase) return [];
    try {
        const { data, error } = await supabase
            .from("chats")
            .select("*")
            .order("updated_at", { ascending: false });

        if (error) throw error;
        return data as Chat[];
    } catch (error) {
        console.error("Error fetching chats:", JSON.stringify(error, null, 2));
        return [];
    }
};

/**
 * Fetches messages for a specific chat.
 */
export const getMessages = async (chatId: number) => {
    if (!supabase) return [];
    try {
        const { data, error } = await supabase
            .from("messages")
            .select("*")
            .eq("chat_id", chatId)
            .order("created_at", { ascending: true });

        if (error) throw error;
        return data as ChatMessage[];
    } catch (error) {
        console.error("Error fetching messages:", JSON.stringify(error, null, 2));
        return [];
    }
};

/**
 * Sends a message in a specific chat.
 */
export const sendChatMessage = async (chatId: number, text: string, senderId: string = "me") => {
    if (!supabase) return null;
    try {
        const { data, error } = await supabase
            .from("messages")
            .insert([{ chat_id: chatId, text, sender_id: senderId }])
            .select()
            .single();

        if (error) throw error;

        // Update the chat's updated_at timestamp
        await supabase.from("chats").update({ updated_at: new Date().toISOString() }).eq("id", chatId);

        return data as ChatMessage;
    } catch (error) {
        console.error("Error sending message:", JSON.stringify(error, null, 2));
        return null;
    }
};
