import React from "react"
import { Container, Header, Item, Input, Icon, Button, Text } from "native-base"

function Search(props) {
  const [searchValue, setSearchValue] = React.useState("")
  const handleChangeAndEnter = (ev) => {
    console.log(ev)
    // if (ev.key === "Enter") {
    //   console.log("ENTER")
    //   props.setFilter(searchValue)
    //   return
    // }
    setSearchValue(ev)
  }
  const handleEnter = (ev) => {
    console.log("enter")
    props.setFilter(searchValue)
  }

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={handleChangeAndEnter} onSubmitEditing={handleEnter} />
          <Icon name="ios-people" />
        </Item>
        <Button transparent onPress={() => console.log("ONPRESS")}>
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>
  )
}

export default Search
