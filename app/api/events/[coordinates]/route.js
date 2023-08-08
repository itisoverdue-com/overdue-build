//https://www.eventbriteapi.com/v3
import { NextResponse } from "next/server"

const maxDistance = 50

// URL Example - "http://localhost:3000/events/30.232,-118.23"
export async function GET(request, { params: { coordinates } }) {
   const _ = coordinates.split(",")
   const lat = parseInt(_[0])
   const lon = parseInt(_[1])

   const TOKEN = process.env.EVENTBRITE_API_KEY
   const ORG_ID = process.env.ORGANIZATION_ID

   const res = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events?status=live&expand=venue&name_filter=la`,
      {
         method: "GET",
         headers: {
            Authorization: `Bearer ${TOKEN}`,
         },
      }
   )
   const { events } = await res.json()
   const data = []
   events.forEach((item) => {
      const eventLat = parseInt(item.venue.address.latitude)
      const eventLon = parseInt(item.venue.address.longitude)
      const withinDistance = calculateDistance(lat, lon, eventLat, eventLon)
      console.log(withinDistance)
      withinDistance && data.push(item)
   })

   return NextResponse.json(data)
}

function calculateDistance(lat1, lon1, lat2, lon2) {
   const R = 3958.8 // Radius of the Earth in miles

   // Convert latitudes and longitudes to radians
   lat1 *= Math.PI / 180
   lon1 *= Math.PI / 180
   lat2 *= Math.PI / 180
   lon2 *= Math.PI / 180

   // Calculate the difference in latitude and longitude
   const dLat = lat2 - lat1
   const dLon = lon2 - lon1

   // Calculate the haversine
   const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

   // Calculate the distance in miles
   var distance = R * c * 0.621371

   return distance <= maxDistance
}
