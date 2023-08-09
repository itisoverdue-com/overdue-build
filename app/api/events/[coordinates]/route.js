//https://www.eventbriteapi.com/v3
import { NextResponse } from "next/server"

// API Docs - https://www.eventbrite.com/platform/api#/reference/event/list/list-events-by-organization
// URL Example - "http://localhost:3000/events/30.232,-118.23"

const maxDistance = 50
const BASE_API = "https://www.eventbriteapi.com/v3"

export async function GET(request, { params: { coordinates } }) {
   const _ = coordinates.split(",")
   const lat = parseInt(_[0])
   const lon = parseInt(_[1])

   const TOKEN = process.env.EVENTBRITE_API_KEY
   const ORG_ID = process.env.ORGANIZATION_ID
   const OPTIONS = {
      method: "GET",
      headers: {
         Authorization: `Bearer ${TOKEN}`,
      },
   }

   const res = await fetch(
      `${BASE_API}/organizations/${ORG_ID}/events?expand=venue&status=live`,
      OPTIONS
   )
   const { events } = await res.json()

   // Find Nearby Events based on maxDistance
   const nearby = []
   events.forEach((item) => {
      const eventLat = parseInt(item.venue.address.latitude)
      const eventLon = parseInt(item.venue.address.longitude)
      const withinDistance = calculateDistance(lat, lon, eventLat, eventLon)
      withinDistance && nearby.push(item)
   })

   // Populate Events with Descriptions
   const results = []
   for (const event of nearby) {
      const res = await fetch(
         `${BASE_API}/events/${event.id}/description`,
         OPTIONS
      )
      if (res.status === 200) {
         const data = await res.json()
         const populatedItem = {
            ...event,
            description: data.description,
         }
         results.push(populatedItem)
      }
   }

   return NextResponse.json(results)
}

/**
 * EventBrite Event Interface
 *
 * capacity: number;
 * category_id: string;
 * changed: Date;
 * created: Date;
 * currency: string;
 * description: {
 *    text: string;
 *    html: string;
 * };
 * end: {
 *    timezone: string;
 *    local: Date;
 *    utc: Date;
 * };
 * format_id: string;
 * id: string;
 * inventory_type: string;
 * invite_only: boolean;
 * is_externally_ticketed: boolean;
 * is_free: boolean
 * is_locked: boolean;
 * is_reserved_seating: boolean
 * listed: boolean;
 * locale: string;
 * logo: {
 *    aspect_ratio: string;
 *    crop_mask: {
 *       height: number
 *       width: number
 *       top_left: {
 *          x: 0;
 *          y: 0;
 *       }
 *    }
 *    edge_color: string;
 *    id: string
 *    orginal: {
 *       url: string
 *       width: number;
 *       height: number;
 *    };
 *    url: string;
 * }
 * name: {
 *    text: string
 *    html: string
 * }
 * online_event: boolean
 * organization_id: string
 * organizer_id: string
 * published: Date
 * start: {
 *    timezone: string;
 *    local: Date;
 *    utc: Date;
 * };
 * status: string
 * summary: string
 * url: string
 * venue: {
 *    address: {
 *       address_1: string
 *       address_2: string
 *       city: string
 *       country: string
 *       latitude: string
 *       localized_address_display: string
 *       localized_area_display: string
 *       localized_multi_line_address_display: string[]
 *       longitude: string
 *       postal_code: string
 *       region: string
 *    }
 *    id: string
 *    latitude: string
 *    longitude: string
 *    name: string
 * }
 */

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
