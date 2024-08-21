import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {

    return (
        <div>
          {messageHistory.map((object, index) => (
            <p key={index}>{object.content.toString()}</p>
          ))}
        </div>
      );
    }
