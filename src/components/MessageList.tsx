import type { Message, Friend } from "../types";


interface MessageListProps {
  messages: Message[];
  friend: Friend;
}

export default function MessageList({ messages, friend }: MessageListProps) {
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">No messages yet. Start the conversation!</div>
      ) : (
        messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}
          >
            {message.sender === 'friend' && (
              <img src={friend.avatar} alt={friend.name} className="avatar" />
            )}
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}