"use client";
import React from 'react'

const Button = () => {
    const [post, setPosts] = React.useState([])
  return (
    <div>
      <button onClick={() => {
        alert('clicked')
      }}>Click me</button>
    </div>
  )
}

export default Button
