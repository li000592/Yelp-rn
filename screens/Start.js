import React from "react"
import { View, Text, Button } from "native-base"
import { useNavigation } from "@react-navigation/native"

function Start() {
  const navigation = useNavigation()
  const toListView = () => navigation.navigate("Home")

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={toListView} style={{ alignSelf: "center" }}>
        <Text>See Restaurant</Text>
      </Button>
    </View>
  )
}

export default Start
