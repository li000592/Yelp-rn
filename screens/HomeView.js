import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import { Header, Footer, FooterTab, Button } from "native-base"

import MapViewPage from "./MapViewPage"
import Filter from "../components/Filter"
import Search from "../components/Search"
import ListView from "./ListView.js"
import Tabs from "../components/Tabs"
import getYelpData from "../resources/getYelpData"
import getLocation from "../resources/getLocation"

function HomeView() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [yelpData, setYelpData] = useState([])
  const [filter, setFilter] = useState("all")
  const [geolocation, setGeolocation] = useState()
  const [toggleView, setToggleView] = useState("list")

  useEffect(() => {
    getLocation((currentLocation) => {
      if (currentLocation) {
        setGeolocation(currentLocation)
        getYelpData(currentLocation, filter, (response) => {
          setYelpData(response)
          setIsLoading(false)
        })
      }
    })
  }, [filter])

  useEffect(() => {
    setIsLoading(true)
  }, [filter])

  return (
    <View style={styles.page}>
      <Header>
        <Search setFilter={setFilter} />
      </Header>
      <Header>
        <Tabs style={styles.tabs} setToggleView={setToggleView} toggleView={toggleView} />
      </Header>
      {toggleView === "map" ? (
        <MapViewPage geolocation={geolocation} yelpData={yelpData} />
      ) : (
        <ListView style={styles.listview} navigation={navigation} yelpData={yelpData} isLoading={isLoading} />
      )}
      <Footer>
        <Filter setFilter={setFilter} />
      </Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  listView: {
    flex: 0.9,
  },
  tabs: {
    height: 10,
  },
})

export default HomeView
