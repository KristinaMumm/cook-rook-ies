import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {
  
  function getUserRow(message : string, index : number)  {
    return(<div key={index} className="flex m-4  justify-end">
      <div className="flex justify-end max-w-[75%] p-4 bg-[#855C47] rounded-lg rounded-es-xl">
        <p className="text-stone-100 " >{message}</p>
      </div>
    </div>)

  }

  function getAiRow(message : string, index : number)  {
    return (
      <div key={index} className="m-4 ">
        <div className="flex max-w-[75%] p-4 bg-[#644536] rounded-lg rounded-es-xl">
          <p className="text-stone-300">{message}</p>
        </div>
      </div>
    )

  }
  

  return (
    <div className="flex flex-col max-h-full overflow-y-auto">
      {messageHistory.reverse().map((message, index) => {
        if (message.role == 'user') {
                          
          return getUserRow(message.content.toString(), index)
              
        } else {
          
          return getAiRow(message.content.toString(), index)
        }
      })}
    </div>
  );
}
