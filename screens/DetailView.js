import React from "react"
import { Image } from "react-native"
import { Container, Content, Card, CardItem, Text, Body, Right, Left } from "native-base"

function DetailView(props) {
  const yelpData = props.yelpData
  console.log(yelpData)
  const data = props.route.params
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{data.name}</Text>
                <Text note>&#9733;{data.rating}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody>
            <Image
              source={{
                uri: data.img
                  ? data.img
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
              }}
              style={{ height: 200, width: "100%", flex: 1 }}
              resizeMethod="resize"
            />
          </CardItem>

          <CardItem>
            <Left>
              <Text>{data.price}</Text>
            </Left>
            <Body>
              <Text>{data.phone}</Text>
            </Body>
            <Right>
              <Text>{data.distance.toFixed(0)}m</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default DetailView
