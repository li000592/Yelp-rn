import React, { Component } from "react"
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from "native-base"

function Tabs(props) {
  const selectList = () => {
    console.log("CLICK LIST")
    props.setToggleView("list")
  }
  const selectMap = () => {
    console.log("CLICK MAP")
    props.setToggleView("map")
  }

  return (
    <Segment>
      <Button first active={props.toggleView === "list"} onPress={selectList}>
        <Text>List</Text>
      </Button>
      <Button last active={props.toggleView === "map"} onPress={selectMap}>
        <Text>Map</Text>
      </Button>
    </Segment>
  )
}

export default Tabs
