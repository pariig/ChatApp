import React from 'react'
import useConversation from '../../statemanage/useConversation.js'

function Chatuser() {
    const {selectedConversation}= useConversation()
    return (
        <>
            <div className='pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 
            hover:bg-gray-600 duration-300'>
            <div>
            <div className="avatar online">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
            </div>

            <div className='text-x1'>
              { /* <h1 className='text-xl'>{selectedConversation.name}</h1> */}
                <h1 className='text-xl'>Ankit</h1>
                <span className='text-sm'>Online</span>
            </div>
            </div>
        </>
    )
}

export default Chatuser
