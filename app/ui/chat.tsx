import { CoreMessage } from "ai";

export default function Chat({ messageHistory }: { messageHistory: CoreMessage[] }) {

return (<div>
{messageHistory.map(function(object, i){
        return <p key={i}>{object.content.toString()}</p>;
    })}
</div>)
}
