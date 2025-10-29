import axios from 'axios'
import React from 'react'
import Sidebar from '../components/home/Sidebar'
import StatusBar from '../components/home/StatusBar'
import ContentBar from '../components/home/ContentBar'

function Home() {
  return (
    <div className="
      h-screen 
      min-h-screen 
      grid 
      grid-cols-[260px_1fr] 
      grid-rows-[auto_1fr] 
      bg-black 
      text-white
    ">
      {/* Sidebar — left side, full height (spans both rows) */}
      <div className="row-span-2 col-span-1 border-r border-gray-800/60 bg-[#070707]">
        <Sidebar />
      </div>

      {/* StatusBar — top right */}
      <div className="col-start-2 row-start-1 border-b border-gray-800/50 p-4 flex items-center gap-4 overflow-x-auto">
        <StatusBar />
      </div>

      {/* ContentBar — main content area */}
      <div className="col-start-2 row-start-2 p-6 overflow-y-auto">
        <ContentBar />
      </div>
    </div>
  )
}

export default Home
