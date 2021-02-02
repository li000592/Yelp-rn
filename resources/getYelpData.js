const API_KEY =
  "LKgCRipcz9GTijDSW4X6SRs9JGQI_zgKmUAwPVdzTe9yTBtgImwjNia4rW5ZvfgKb-5qS_D4iWE-JPvt7PWM1ZL60B8Tfe9cHOSdGHm8Hk5GnPhZ7sk_GeeMoDLNX3Yx"
const BASIC_URL = "https://api.yelp.com/v3/businesses/search?"

export const getYelpData = (location, categories, callback) => {
  const queryObject = {
    ...location,
    sort_by: "distance",
    categories: categories,
  }
  const queryString = toQueryString(queryObject)

  fetch(BASIC_URL + queryString, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA", data)
      callback(data.businesses)
    })
}

const toQueryString = (obj) => {
  return Object.keys(obj)
    .map((k) => {
      return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])
    })
    .join("&")
} // https://stackoverflow.com/questions/5505085/flatten-a-javascript-object-to-pass-as-querystring

export default getYelpData
