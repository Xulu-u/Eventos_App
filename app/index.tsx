import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper"
import { logIn, signUp } from "./services/auth";
import { useEventUserContext } from "./providers/UserProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './api/firebase';
import { userData } from "./common/types/User";

export default function Page() {
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")

  const {eventUser, setEventUser} = useEventUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('user', user, ' userId:', user.uid, "User logged");
        setEventUser({name: user.displayName, uid: user.uid, email: user.email} as userData)
        router.push("pages/Home")
      } else {
        console.log("No user logged");
        setEventUser(undefined)
      }
    })
  },[] )
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Events_App</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPass}
          value={pass}
        />
        <Button
          onPress={ async () => {
            const singIn = await logIn(email, pass)
            if (singIn) {
              router.navigate("pages/Home")
            } else {
              console.log("no se ha podido iniciar session")
            }
          }}
          mode="contained"
        >
          <Text>Log In</Text>
        </Button>
        <Button
          onPress={() => {
            router.navigate("pages/Register")
          }}
          mode="contained-tonal"
        >
          <Text>Register</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  input: {
    width: 320,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical:3,
  }
});
