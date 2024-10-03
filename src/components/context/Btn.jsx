import React, { useState } from 'react'

const Btn = () => {
  
  const [signedIn, setSignedIn] = useState(false)
  return (
    <div onClick={() => setSignedIn(!signedIn)}>{signedIn ? 'Sign Out' : 'Sign In'}</div>
  )
}

export default Btn