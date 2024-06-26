import React from "react"
import { View, TextInput, StyleSheet, Text} from "react-native"
import { Button } from "react-native-paper"
import { router } from "expo-router"
import { signUp } from "../../service/auth"

const Register = () => {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [name, setName] = React.useState('')
  const [lastName, setLastName] = React.useState('')


  return (
    <View style={styles.container}>
       <View style={styles.main}>
        <Text style={styles.subtitle}>Registrar</Text>
        <TextInput 
            style={ styles.input}
            placeholder="nombre"
            onChangeText={setName}
            value={name}
        />
         <TextInput 
            style={ styles.input}
            placeholder="apellido"
            onChangeText={setLastName}
            value={lastName}
        />
        <TextInput 
            style={ styles.input}
            placeholder="correo"
            onChangeText={setEmail}
            value={email}
        />
        <TextInput 
            style={ styles.input}
            placeholder="contraseña"
            onChangeText={setPass}
            value={pass}
        />
         <TextInput 
            style={ styles.input}
            placeholder="repite la contraseña"
        />

        <Button
          onPress={() => {
            signUp(name,lastName,email,pass)
          }}
          mode="contained-tonal"
        >
          <Text>Registrar</Text>
        </Button>

        <Button
          onPress={() => {
            router.back()
          }}
          mode="contained"
        >
          <Text>Acceder</Text>
        </Button>

       </View>
    </View>
  )
}

export default Register

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
      textAlign: "center"
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


