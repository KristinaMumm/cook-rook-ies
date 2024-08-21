'use client';

import { useState, useEffect } from 'react';
import { getAnswer } from './actions';
import { useDebouncedCallback } from 'use-debounce';
import { CoreSystemMessage, CoreMessage, convertToCoreMessages } from 'ai';
import Chat from './ui/chat';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [userMessage, setUserMessage] = useState<string>('');
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
      
        // This action will be executed every time messageHistory is updated
        console.log('Message history updated:', messageHistory);
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
      <div className='h-screen flex flex-col  
                    items-center justify-center'>
        <form>
          <div>
            <label>
              Enter text
            </label>
            <div>
              <input value={userMessage} type="text" onChange={e => { setUserMessage(e.currentTarget.value); }} 
              className='border pb-12'/>
            </div>
          </div>
        </form>
        <button
          onClick={async () => {
            addMessageInput(userMessage, 'user')
            setUserMessage('');
          }}
        >
          Answer
        </button>
        <div>
          <Chat messageHistory={messageHistory}/>
        </div>
      </div>
    </body>
    
  );
}
