//https://www.eventbriteapi.com/v3
import { NextResponse } from "next/server"

const maxDistance = 50

export async function GET() {
   const lat = 33.77005
   const lon = -118.193741

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
      withinDistance && data.push(item)
   })

   return NextResponse.json(data)
}

function calculateDistance(lat1, lon1, lat2, lon2) {
   const R = 3958.8 // Radius of the Earth in miles

   const dLat = (lat2 - lat1) * (Math.PI / 180)
   const dLon = (lon2 - lon1) * (Math.PI / 180)

   const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
         Math.cos(lat2 * (Math.PI / 180)) *
         Math.sin(dLon / 2) *
         Math.sin(dLon / 2)

   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
   const distance = R * c
   return distance <= maxDistance
}
