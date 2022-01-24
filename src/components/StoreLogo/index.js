import React from 'react'
import { Link } from 'react-router-dom'

export default function StoreLogo() {
  return (
    <Link to="/">
       <div className="text-blue-600 font-bold text-4xl mt-5">POS Food Store</div>
     </Link>
  )
}
