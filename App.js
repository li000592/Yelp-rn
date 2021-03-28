import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import DetailView from "./screens/DetailView"
import Start from "./screens/Start"
import HomeView from "./screens/HomeView"
import * as Font from "expo-font"

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            title: "Yelp",
            headerStyle: {
              backgroundColor: "rgb(63,81,183)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerStyle: {
              backgroundColor: "rgb(63,81,183)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailView}
          options={{
            title: "Yelp",
            headerStyle: {
              backgroundColor: "rgb(63,81,183)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
