
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Join from "./Join";
import Event from "./Event";



const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <NavigationContainer
      independent={true}
    >
      <Tab.Navigator
      >
        <Tab.Screen name="Events List" component={Event}/>
        <Tab.Screen name="Invitations" component={Join}/>
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}

export default Home
