import React from "react";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper"
import { logIn, signUp } from "../service/auth";





export default function Page() {
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Accede</Text>
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
          <Text>Enviar</Text>
        </Button>

        <Button
          onPress={() => {
            router.navigate("pages/Register")
          }}
          mode="contained-tonal"
        >
          <Text>Registrar</Text>
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
