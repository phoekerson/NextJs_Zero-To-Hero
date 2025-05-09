"use client";
import React from 'react'

const button = () => {
    const [post, setPosts] = React.useState([])
  return (
    <div>
      <button onClick={() => {
        alert('clicked')
      }}>Click me</button>
    </div>
  )
}

export default button
