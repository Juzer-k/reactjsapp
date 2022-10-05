import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "absolute",
  }
  return (
    <footer className='bg-dark text-light text-center w-100' style={footerstyle}>
      Copyright &copy; react.app.com

    </footer>
  )
}
