import React from "react"
import { useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { getUser } from "../services/getUser"



const Join = () => {
  const [joined, setJoined] = React.useState<any[]>([])

  React.useEffect(() => {
    getUser().then(setJoined)
  },[])

  return (
    <View>
      <FlatList 
        data={joined}
        renderItem={({item}) => <View>
          <Text>{item.name}</Text>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Join
