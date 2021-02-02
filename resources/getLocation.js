import * as Location from "expo-location"

const getLocation = (callback) => {
  Location.requestPermissionsAsync().then((status) => {
    if (status.status !== "granted") {
      callback(undefined)
      return
    }
    Location.getCurrentPositionAsync({}).then((response) => {
      console.log(response)
      const geolocation = {
        latitude: response.coords.latitude,
        longitude: response.coords.longitude,
      }
      callback(geolocation)
    })
  })

  let location = console.log("!!!", location)
  return location
}
export default getLocation
