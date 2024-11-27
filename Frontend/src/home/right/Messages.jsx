import React from 'react'
import Message from './Message'
import useGetMessage from "../../context/useGetMessage.js"
import Loading from '../../../components/Loading.jsx';

function Messages() {
    const {messages, loading }=useGetMessage();

    console.log(messages);
    return (
        <>

{loading?(<Loading></Loading>):(messages.length>0 && messages.map((message)=>{
    return <Message key={message._id} message={message} />
}
) )}
         <div className='' style={{minHeight: "calc(88vh - 10vh)"}}>

            {!loading && messages.length===0 && 
            <div>
                <p className='text-center font-bold mt-[20%]'>Say! Hi</p>
            </div>    }
         </div>
         
        </>
    )
}

export default Messages
