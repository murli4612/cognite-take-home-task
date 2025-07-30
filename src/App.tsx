import { useState } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import ChatWindow from './components/ChatWindow';
import type { Friend, Message } from './types';

function App() {
  const [friends] = useState<Friend[]>([
    { id: 1, name: 'Mukesh Kumar', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Harishta Ranjan', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Kumar Singh', avatar: 'https://i.pravatar.cc/150?img=3' },
  ]);

  const [selectedFriendId, setSelectedFriendId] = useState<number>(friends[0].id);
  const [messagesByFriend, setMessagesByFriend] = useState<Record<number, Message[]>>({
    1: [
      { id: 1, text: 'Hey there!', sender: 'friend', timestamp: new Date(Date.now() - 3600000) },
      { id: 2, text: 'How are you?', sender: 'friend', timestamp: new Date(Date.now() - 1800000) },
      { id: 3, text: "I'm good, thanks!", sender: 'me', timestamp: new Date(Date.now() - 900000) },
    ],
    2: [
      { id: 1, text: 'Hi Jane!', sender: 'me', timestamp: new Date(Date.now() - 7200000) },
      { id: 2, text: 'Are we meeting tomorrow?', sender: 'me', timestamp: new Date(Date.now() - 3600000) },
    ],
    3: [],
  });

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'me',
      timestamp: new Date(),
    };

    setMessagesByFriend(prev => ({
      ...prev,
      [selectedFriendId]: [...(prev[selectedFriendId] || []), newMessage],
    }));
  };

  return (
    <div className="app">
      <FriendsList
        friends={friends}
        selectedFriendId={selectedFriendId}
        onSelectFriend={setSelectedFriendId}
      />
      <ChatWindow
        friend={friends.find(f => f.id === selectedFriendId)!}
        messages={messagesByFriend[selectedFriendId] || []}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;