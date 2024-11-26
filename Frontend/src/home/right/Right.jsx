import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'
export default function Right() {
  return (
    <div className='w-[70%] border border-white bg-slate-950 text-white'>
     
      <Chatuser></Chatuser>
      <div className="py-2 flex-ankit overflow-y-auto" 
      style={{maxHeight: "calc(92vh - 8vh)"}}>
      <Messages></Messages>
      </div >
    
      <Type></Type>
    </div>
  )
}
