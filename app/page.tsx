'use client';

import { useState, useEffect } from 'react';
import { getAnswer } from './actions';
import { CoreMessage } from 'ai';
import Chat from './ui/chat';
import InputForm from './ui/input-form';
import logo from '../pics/logo.png'
import Image from 'next/image';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [messageHistory, setMessageHistory] = useState<CoreMessage[]>([])

  const addMessageInput = (newMessage : string, currentRole : string) => {
    let newMessageObject : CoreMessage;
    if (currentRole == 'user') {
      newMessageObject = {
        role: 'user',
        content: newMessage,
      }
    } else {
      newMessageObject = {
        role: 'assistant',
        content: newMessage,
      }
    }
    
    setMessageHistory(result => [...result, newMessageObject]);
  }

  useEffect(() => {
    const performAsyncAction = async () => {
      if (messageHistory.length > 0) {
      
        if (messageHistory[messageHistory.length-1].role == 'user')  {
          console.log(messageHistory[messageHistory.length-1].content);
          const { text } = await getAnswer(messageHistory);
          addMessageInput(text, 'assistant')   
        } else {
          console.log(messageHistory[messageHistory.length-1].content);
        }
      }
    }
    
    performAsyncAction();
  }, [messageHistory]);

  return (
    <body>
      <section className='flex flex-col items-center w-full h-screen content-center bg-[#EADED7]'>
        <div className='flex justify-center items-center w-2/6'>
          <Image src={logo.src} className='items-center' alt="cook-rook-ies logo" width={0} height={0} layout="responsive"/> 
        </div> 
        <div className='flex justify-center items-center w-full content-center bg-[#EADED7] h-full'>
        <div className='p-2 flex-col border-8 border-[#6B4B38] rounded-lg w-3/5 h-5/6 bg-[#B99179]'>
          <div className='h-5/6'>
            <Chat messageHistory={messageHistory}/>
          </div>
          <div className='flex justify-center items-center h-1/6'>
            <InputForm addMessageInput={addMessageInput}/>
          </div>
        </div>
        </div>
        

      </section>
      
    </body>
    
  );
}
