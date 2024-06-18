import React from "react";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper"





export default function Page() {
  const [name, setName] = React.useState()


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Accede</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
        />
        <Button
          onPress={() => router.navigate("pages/Home")}
          mode="contained"
        >
          <Text>Enviar</Text>
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
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    fontSize: 22,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical:3,
  }
});
