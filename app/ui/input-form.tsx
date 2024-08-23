import { useState } from 'react';

type AddMessageInputFunction = (message: string, sender: string) => void;

interface InputFormProps {
  addMessageInput: AddMessageInputFunction;
}

const InputForm: React.FC<InputFormProps> = ({ addMessageInput }) => {
  const [userMessage, setUserMessage] = useState<string>('');  
  
  const sendMessageToBot = () => {
    addMessageInput(userMessage, 'user')
    setUserMessage('');
  }

  const onEnterPress = (event : React.KeyboardEvent) => {
    if(event.key === "Enter" && event.shiftKey == false) {
      event.preventDefault();
      sendMessageToBot()
    }
  }

  return (
    <div className='flex flex-col w-5/6 h-max'>
      <div className='w-full'>
        <form className='flex w-full h-full items-center' onSubmit={sendMessageToBot}>
          <input type="text" value={userMessage} onKeyDown={onEnterPress} 
            onChange={event => { setUserMessage(event.currentTarget.value); }} className='border w-full m-1 p-2 resize-none'/>
          <button className='bg-blue-500 hover:bg-blue-700 m-1 p-2 w-32 text-white font-bold rounded'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
