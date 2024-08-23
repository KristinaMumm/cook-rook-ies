import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {

    return (
        <div className="flex flex-col-reverse max-h-full flex-col overflow-y-auto bg-red-200">
          {messageHistory.reverse().map((object, index) => (
            <p className="" key={index}>{object.content.toString()}</p>
          ))}
        </div>
      );
    }
