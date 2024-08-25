'use client';

import Header from './ui/header';
import ChatBox from './ui/chat-box';


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  
  return (
    <body>
      <section className='flex flex-col items-center w-full h-screen content-center bg-[#EADED7]'>
        <Header/>
        <ChatBox/>   
      </section>
      
    </body>
    
  );
}
