import React from "react"

const MyLocation = () => {
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

  function showPosition(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    setMyLocation({ lat: latitude, lng: longitude })
    console.log(
      "Latitude: " + latitude + ", Longitude: " + longitude
    )
  }

  function showError(error) {
    console.log("Error getting location: " + error.message)
  }

  return (
    <div>
      <button onClick={() => startTracking()}>Start</button>
      <button onClick={() => stopTracking()}>Stop</button>
      <div>Latitude: {myLocation.lat}</div>
      <div>Longitude: {myLocation.lng}</div>
    </div>
  )
}

export default MyLocation
