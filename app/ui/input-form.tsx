import { useState } from 'react';

type AddMessageInputFunction = (message: string, sender: string) => void;

interface InputFormProps {
  addMessageInput: AddMessageInputFunction;
}

const InputForm: React.FC<InputFormProps> = ({ addMessageInput }) => {
  const [userMessage, setUserMessage] = useState<string>('');  
  
  const sendMessageToBot = (event: Event) => {
    addMessageInput(userMessage, 'user')
    setUserMessage('');
    event.preventDefault();
    return false
  }

  const onEnterPress = (event : React.KeyboardEvent) => {
    if(event.key === "Enter" && event.shiftKey == false) {      
      sendMessageToBot(event.nativeEvent)
    }
  }

  return (
    <div className='flex flex-col w-5/6 h-max'>
      <div className='w-full'>
        <button />
        <form className='flex w-full h-full items-center' onSubmit={(event) => sendMessageToBot(event.nativeEvent)}>
          <input type="text" value={userMessage} onKeyDown={onEnterPress} 
            onChange={event => { setUserMessage(event.currentTarget.value); }} className='border w-full m-1 p-2 resize-none bg-[#EADED7]'/>
          <button type="submit" className='bg-[#6B4B38] hover:bg-blue-700 m-1 p-2 w-32 text-white font-bold rounded'>
            Saada
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
