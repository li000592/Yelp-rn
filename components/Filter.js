import React from "react"
import {
  Icon,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Header,
  Title,
  FooterTab,
  View,
  Button,
} from "native-base"

function Filter(props) {
  return (
    <FooterTab>
      <Button onPress={() => props.setFilter("restaurants")}>
        <Text>All</Text>
      </Button>
      <Button onPress={() => props.setFilter("coffee")}>
        <Text>Coffee</Text>
      </Button>
      <Button active>
        <Text onPress={() => props.setFilter("bakeries")}>Bakeries</Text>
      </Button>
      <Button onPress={() => props.setFilter("tacos, [US, MX]")}>
        <Text>Taco</Text>
      </Button>
    </FooterTab>
  )
}

export default Filter
