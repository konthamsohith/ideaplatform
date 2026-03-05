import { db } from "./firebase";
import {
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp,
    Timestamp
} from "firebase/firestore";

export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    lastLogin: Timestamp;
}

export interface Idea {
    id?: string;
    title: string;
    description: string;
    impact: string;
    authorId: string;
    authorName: string;
    status: "Draft" | "Refinement" | "Collaborative";
    collaborators: number;
    createdAt: Timestamp;
}

/**
 * Syncs user authentication data to the Firestore 'users' collection.
 */
export const syncUserToFirestore = async (user: any) => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const userData: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        lastLogin: serverTimestamp() as Timestamp,
    };

    try {
        await setDoc(userRef, userData, { merge: true });
    } catch (error) {
        console.error("Error syncing user to Firestore:", error);
    }
};

/**
 * Creates a new idea in the 'ideas' collection.
 */
export const createIdea = async (ideaData: Omit<Idea, "id" | "createdAt" | "collaborators">) => {
    try {
        const docRef = await addDoc(collection(db, "ideas"), {
            ...ideaData,
            collaborators: 0,
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error("Error creating idea:", error);
        throw error;
    }
};

/**
 * Fetches all ideas for the marketplace.
 */
export const getAllIdeas = async () => {
    try {
        const q = query(collection(db, "ideas"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Idea[];
    } catch (error) {
        console.error("Error fetching all ideas:", error);
        return [];
    }
};

/**
 * Fetches ideas submitted by a specific user.
 */
export const getUserIdeas = async (uid: string) => {
    try {
        const q = query(
            collection(db, "ideas"),
            where("authorId", "==", uid),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Idea[];
    } catch (error) {
        console.error("Error fetching user ideas:", error);
        return [];
    }
};
