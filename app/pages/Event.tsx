import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { FAB } from "react-native-paper"

const Event = () => {
  return (
    <View style={{flex:1}}>
        <Text>Una lista de eventos</Text>
        <FAB
            style={styles.addEventButton}
            label='add'
        />
        
    </View>
  )
}

export default Event


const styles = StyleSheet.create({
    addEventButton : {
        position: "absolute",
        borderRadius: 50,
        padding: 5,
        bottom: 0,
        right: 0,
        margin: 16,
    },
    textButton: {
        color: "white",
        fontSize:38,
    }
})