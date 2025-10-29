import React from 'react'

function Image() {
  return (
    <div>

        <img className='h-max' src={`${process.env.PUBLIC_URL}/images/landing.png`} />
    </div>
  )
}

export default Image