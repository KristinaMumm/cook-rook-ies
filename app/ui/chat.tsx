import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {

    return (
        <div className="flex flex-col-reverse max-h-full flex-col overflow-y-auto">
          {messageHistory.reverse().map((message, index) => {
            if (message.role == 'user') {
                          
              return (
                <div key={index} className="flex m-4  justify-end">
                  <div className="flex justify-end max-w-[75%] p-4 bg-[#855C47] rounded-lg rounded-es-xl">
                    <p className="text-stone-100 " >{message.content.toString()}</p>
                  </div>
                </div>
                
              
            )
              
            } else {

              return (
                <div key={index} className="m-4 ">
                  <div className="flex max-w-[75%] p-4 bg-[#644536] rounded-lg rounded-es-xl">
                    <p className="text-stone-300">{message.content.toString()}</p>
                  </div>
                </div>
              )
            }
                       
          })}
        </div>
      );
    }
