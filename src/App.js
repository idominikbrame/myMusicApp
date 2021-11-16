import React from "react"

import "./App.css"

import Navbar from "./components/nav/Nav"
import Dashboard from "./components/dashboard/Dashboard"
import Notify from "./notifications/Notifications"

function App() {
  return (
    <>
        <Navbar />
        <Dashboard />
    </>
  )
}

export default App
