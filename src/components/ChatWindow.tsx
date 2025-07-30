
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import type { Friend, Message } from '../types';

interface ChatWindowProps {
  friend: Friend;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export default function ChatWindow({ friend, messages, onSendMessage }: ChatWindowProps) {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={friend.avatar} alt={friend.name} className="avatar" />
        <h3>{friend.name}</h3>
      </div>
      <MessageList messages={messages} friend={friend} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}