import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"

function MapViewPage(props) {
  let currentlat = props.geolocation.latitude
  let currentlong = props.geolocation.longitude
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation={true}
        region={{
          latitude: currentlat,
          longitude: currentlong,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        minZoomLevel={12}
        // maxZoomLevel={14}
      >
        {props.yelpData.map((info) => (
          <Marker
            key={info.id}
            title={info.name}
            coordinate={{
              latitude: info.coordinates.latitude,
              longitude: info.coordinates.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
export default MapViewPage
