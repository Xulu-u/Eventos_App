import { collection, addDoc, db } from "../api/firebase"


const collectionName = "Users"

interface userData {
    name: string;
    lastName: string;
    email: string | null;
    uid: string | null;  
}

export const createUser = async (obj:userData) => {
    const colRef = await collection(db, collectionName)
    const res = await addDoc(colRef, obj)
    return res
}