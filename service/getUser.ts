import { DocumentData, QuerySnapshot } from "firebase/firestore"
import { collection, db, getDocs, query } from "../api/firebase"

const collectionName = "Users"

export const getUser = async () => {
    const colRef = await collection(db, collectionName)
    const q = await query(colRef)
    const res = await getDocs(q)
    return getArrayFromCollection(res)
}

const getArrayFromCollection = (collection:QuerySnapshot<DocumentData, DocumentData>) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}