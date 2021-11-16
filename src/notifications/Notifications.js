import React from "react"

function Notify(props) {
  return (
    <>
    <h1>Notifications</h1>
    <ol>
    {props.onlineMode ? (
          <div>
            <li>
              You Are Online
            </li>
          </div>
        ) : (
          <li>
             You are not online. Please switch your Online Status
          </li>
        )}
    {props.soundQuality === "High" ? (
        <li>
            Setting Sound quality to high may require more data usage. 
        </li>
        ): (
            
             <div></div>
        )}
    </ol>
    </>
  )
}

export default Notify