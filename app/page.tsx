'use client';

import { useState, useEffect } from 'react';
import { getAnswer } from './actions';
import { CoreMessage } from 'ai';
import Chat from './ui/chat';
import InputForm from './ui/input-form';

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
      <section className='flex justify-center items-center w-full h-screen content-center'>

      <div className='p-2 flex-col border-8 w-3/5 h-3/4 bg-lime-800'>
        <div className='h-5/6'>
        <Chat messageHistory={messageHistory}/>
        </div>
        <div className='flex justify-center items-center h-1/6'>
        <InputForm addMessageInput={addMessageInput}/>
        </div>
      </div>

      </section>
      
    </body>
    
  );
}
