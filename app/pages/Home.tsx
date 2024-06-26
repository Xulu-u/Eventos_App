
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
          <Tab.Screen name="Lista de Eventos" component={Event}/>
          <Tab.Screen name="Invitaciones" component={Join}/>
        </Tab.Navigator>
        
      </NavigationContainer>

    
  )
}

export default Home
