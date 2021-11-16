import React, { useEffect, useState } from "react"

import Form from "../form/Form"
import Cards from "../cards/Cards"
import Notify from "../../notifications/Notifications" 

function Dashboard() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [onlineMode, setOnlineMode] = useState(false)
  const [volume, setVolume] = useState()
  const [soundQuality, setSoundQuality] = useState("Normal")

  const toggleOnlineMode = () => {
    setOnlineMode(prevOnlineMode => !prevOnlineMode)
  }
  useEffect(() => {
    console.log(loginStatus)
  }, [loginStatus])

  useEffect(() => {
    console.log(onlineMode)
  }, [onlineMode])

  useEffect(() => {
    console.log(volume)
  }, [volume])

  useEffect(() => {
    console.log(soundQuality)
  }, [soundQuality])

  
  return <>
    {loginStatus ? (
      <>
        <Cards setOnlineMode={setOnlineMode} toggleOnlineMode={toggleOnlineMode} setMasterVolume={setVolume} setSoundQuality={setSoundQuality} />
        <Notify onlineMode={onlineMode} soundQuality={soundQuality}/>
      </>
      ) : ( <Form setLoginStatus={setLoginStatus} />
      )}
    </>
}

export default Dashboard