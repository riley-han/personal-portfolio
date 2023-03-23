import React from "react"
// guidecx coords
// 40.4303889047085, -111.88169671886976
const MyLocation = () => {
  const testMessageAtGuide = {
    message:
      "Hello Riley you are getting this because you are at GuideCX",
    lat: 40.4303889047085,
    lng: -111.88169671886976,
  }
  const [myLocation, setMyLocation] = React.useState<any>({
    lat: 0,
    lng: 0,
  })
  const [globalIntervalId, setGlobalIntervalId] =
    React.useState<any>(null)

  let intervalId: any = null

  function startTracking() {
    console.log("started")
    intervalId = setInterval(getLocation, 5000)
    setGlobalIntervalId(intervalId)
  }
  function stopTracking() {
    console.log("stopped")
    clearInterval(globalIntervalId)
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        showError
      )
    } else {
      console.log(
        "Geolocation is not supported by this browser."
      )
    }
  }

  function showPosition(position: any) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    setMyLocation({ lat: latitude, lng: longitude })
    console.log(
      "Latitude: " + latitude + ", Longitude: " + longitude
    )
  }

  function showError(error: any) {
    console.log("Error getting location: " + error.message)
  }

  const showMessage =
    myLocation.lat >= testMessageAtGuide.lat - 0.01 &&
    myLocation.lat <= testMessageAtGuide.lat + 0.01 &&
    myLocation.lng >= testMessageAtGuide.lng - 0.01 &&
    myLocation.lng <= testMessageAtGuide.lng + 0.01
  return (
    <div>
      <button onClick={() => startTracking()}>Start</button>
      <button onClick={() => stopTracking()}>Stop</button>
      <div>Latitude: {myLocation.lat}</div>
      <div>Longitude: {myLocation.lng}</div>
      {showMessage && (
        <div
          style={{
            padding: "10px",
            width: "300px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "1px solid lightGrey",
            borderRadius: "5px",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <div>{testMessageAtGuide.message}</div>
        </div>
      )}
    </div>
  )
}

export default MyLocation
