import { collection, addDoc, db } from "../api/firebase"
import { userData } from "../common/types/User"

const collectionName = "Users"

export const createUser = async (obj:userData) => {
    const colRef = await collection(db, collectionName)
    const res = await addDoc(colRef, obj)
    return res
}