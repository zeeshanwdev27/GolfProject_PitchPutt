import { motion } from 'motion/react'
import { useState } from "react"
import Map, { Marker, Popup } from "react-map-gl/mapbox"
import "mapbox-gl/dist/mapbox-gl.css"


type LocationPin = {
  id: string
  name: string
  longitude: number
  latitude: number
}

const locations: LocationPin[] = [
  { id: "1", name: "Vancouver, BC", longitude: -123.1207, latitude: 49.2827 },
  { id: "2", name: "Seattle, WA", longitude: -122.3321, latitude: 47.6062 },
  { id: "3", name: "Austin, TX", longitude: -97.7431, latitude: 30.2672 },
]

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;


function CourseDirectory() {

    const [selected, setSelected] = useState<LocationPin | null>(null)

  return (
  <div className="relative h-full py-10 sm:py-15 mx-4 sm:mx-[5%] lg:mx-[10%] flex flex-col gap-10">

    {/* heading */}
    <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mx-auto"
    initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
    >
        Course Directory
    </motion.h1>


    {/* Body */}

    <div className='h-125 w-full rounded-2xl overflow-hidden'>

    <Map
        mapboxAccessToken={mapboxAccessToken}
        initialViewState={{ longitude: -95, latitude: 40, zoom: 3.2 }}
        // Your own custom style URL from Mapbox Studio (recreate the green/dark theme)
        mapStyle="mapbox://styles/zeeshanwdev27/cmtxes9tw00bt01qy60m4a8du"
      >
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            longitude={loc.longitude}
            latitude={loc.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation()
              setSelected(loc)
            }}
          >
            <img
              src="/flag-icon.svg"
              alt={loc.name}
              className="h-10 w-10 cursor-pointer drop-shadow-lg hover:scale-110 transition-transform"
            />
          </Marker>
        ))}

        {selected && (
          <Popup
            longitude={selected.longitude}
            latitude={selected.latitude}
            anchor="top"
            onClose={() => setSelected(null)}
          >
            <p className="font-medium">{selected.name}</p>
          </Popup>
        )}
    </Map>

    </div>

        



          
    </div>
  )
}

export default CourseDirectory
