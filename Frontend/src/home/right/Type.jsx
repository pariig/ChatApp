import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
import { useState } from 'react';
function Type() {
    const { loading, sendMessages }= useSendMessage(); 
    const [message, setMessage] = useState("");
    const handleSubmit =async(e)=>{
        e.preventDefault()
        await sendMessages(message)
        setMessage("")
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
           <div className='flex space-x-3 h-[8vh] text-centre bg-gray-800'>
                <div className='w-[70%] mx-4'>

                    <input 
                    type="text" 
                    value={message}
                    onChange={(e)=>{
                        setMessage(e.target.value)
                    }}
                    placeholder="Type here" 
                    className="border-[1px] border-gray-700 flex items-center  w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1" />   </div>
                <button className='text-3xl'>
                    <IoSend />
                </button>

            </div>
           </form>

        </>
    )
}

export default Type
