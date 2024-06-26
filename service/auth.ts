import { firebaseApp, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../api/firebase";
import { createUser } from "./registre";

export const signUp  = async (
    name: string,
    lastName:string,
    email:string, 
    password:string,
) => {
    

    const auth = getAuth(firebaseApp);
    try {
        const res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        if (res) {
            createUser({
                name,
                lastName,
                email: res.user.email,
                uid: res.user.uid,
            }).then(res => console.log(res))
        }
        return true;
        console.log(res)
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const logIn  = async (email:string, password:string) => {
    const auth = getAuth(firebaseApp);
    
    try {
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        return true 
    } catch (error) {
        console.log(error)
        return false
    }
}