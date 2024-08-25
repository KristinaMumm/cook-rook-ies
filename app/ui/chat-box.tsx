import { useState, useEffect } from 'react';
import { getAnswer } from '../ai_actions';
import { CoreMessage } from 'ai';
import Chat from './chat-box-elements/chat';
import InputForm from './chat-box-elements/input-form';

export default function ChatBox() {
    const [messageHistory, setMessageHistory] = useState<CoreMessage[]>([]);

    function addMessageInput (newMessage : string, currentRole : string) {
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
          if (messageHistory.length > 0 && messageHistory[messageHistory.length-1].role == 'user') {
              const { text } = await getAnswer(messageHistory);
              addMessageInput(text, 'assistant')   
          }
        }

        performAsyncAction();

      }, [messageHistory]);
    
    return(
      <div className='flex justify-center items-center w-full content-center bg-[#EADED7] h-full'>
        <div className='p-2 flex-col border-8 border-[#6B4B38] rounded-lg w-4/5 md:w-3/5 h-5/6 bg-[#B99179]'>
          <div className='h-5/6'>
            <Chat messageHistory={messageHistory.map(object => ({...object}))}/>
          </div>
          <div className='flex justify-center items-center h-1/6'>
            <InputForm addMessageInput={addMessageInput}/>
          </div>
        </div>
      </div>
    )
}
