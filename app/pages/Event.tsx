import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import {FAB, Button} from 'react-native-paper';
import {useEventUserContext} from '../providers/UserProvider';
import {router} from 'expo-router';
import { logout } from '../services/auth';

const Event = () => {
    const {eventUser, setEventUser} = useEventUserContext();
  return (
    <View style={{flex:1}}>
        <Text>User Logged: {eventUser?.email}</Text>

        <FAB
            style={styles.addEventButton}
            label='add'
        />
        <Button
          onPress={() => {
            logout();
            router.navigate("/");
          }}
          mode="contained"
        >
            <Text>Log Out</Text>
        </Button>
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