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
  Spinner,
  View,
} from "native-base"

class ListView extends React.Component {
  toDetailPage = (data) => {
    const detailData = {
      name: data.name,
      phone: data.phone,
      rating: data.rating,
      price: data.price,
      distance: data.distance,
      img: data.image_url,
    }
    this.props.navigation.navigate("Detail", detailData)
  }

  render() {
    console.log("LIST", this.props.yelpData.length)
    if (this.props.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </View>
      )
    }
    if (this.props.yelpData.length > 1) {
      console.log("getedDATA")
      return (
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <List
            dataArray={this.props.yelpData}
            renderRow={(item) => {
              return (
                <ListItem thumbnail key={item.id} onPress={() => this.toDetailPage(item)}>
                  <Left>
                    <Thumbnail
                      square
                      source={{
                        uri: item.image_url
                          ? item.image_url
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>
                      {item.distance.toFixed(0)}m
                    </Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              )
            }}
          ></List>
        </View>
      )
    }
  }
}

export default ListView
