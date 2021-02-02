import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import DetailView from "./screens/DetailView"
import Start from "./screens/Start"
import HomeView from "./screens/HomeView"

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Detail" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
