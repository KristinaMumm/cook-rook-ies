import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {

    return (
        <div className="flex flex-col-reverse max-h-full flex-col overflow-y-auto">
          {messageHistory.reverse().map((message, index) => {
            if (message.role == 'user') {
                          
              return (
                <div className="flex m-4  justify-end">
                  <div className="flex justify-end max-w-[75%] p-4 bg-[#A07254] rounded-lg rounded-es-xl">
                    <p className="text-stone-100 " key={index}>{message.content.toString()}</p>
                  </div>
                </div>
                
              
            )
              
            } else {

              return (
                <div className="m-4 ">
                  <div className="flex max-w-[75%] p-4 bg-[#644536] rounded-lg rounded-es-xl">
                    <p className="text-stone-300" key={index}>{message.content.toString()}</p>
                  </div>
                </div>
              )
            }
                       
          })}
        </div>
      );
    }
