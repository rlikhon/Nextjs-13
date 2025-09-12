'use client'
import Script from 'next/script'
import React from 'react'

const UserLocation = () => {
  return (
    <div>
        <Script src="/lib/location.js" strategy="lazyOnload" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />
         <h1>User Location Page</h1>
        <p>This is the user location page.</p>
        <button onClick={() => { window.getLocation() }}>Get Location</button>
        <div id="demo"></div>
        <p>Open the console to see the location output.</p>
        <p id="demo"></p>
        
    </div>
  )
}

export default UserLocation