import { ChatSingleWindow } from "./chat-single-window";
export const ChatSingle = () => {
    return (
        <>
            <h2>Chat History</h2>
            <div className="chats__wrap">
                <ChatSingleWindow />
            </div>
        </>
    );
};
