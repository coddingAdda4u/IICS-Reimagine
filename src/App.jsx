import { useRef, useEffect } from "react"
import Body from "./Components/Body/Body"
import { ReactLenis, useLenis } from 'lenis/react'
import { Routes, Route } from 'react-router'


const App = () => {

  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }

    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <ReactLenis root ref={lenisRef}/>
      <Body />
    </>
  )
}

export default App
