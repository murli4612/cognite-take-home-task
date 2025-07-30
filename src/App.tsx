// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import ChatWindow from './components/ChatWindow';

export interface Friend {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  text: string;
  sender: 'me' | 'friend';
  timestamp: Date;
}

function App() {
  // const [friends, setFriends] = useState<Friend[]>([
  const [friends] = useState<Friend[]>([
    { id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
  ]);

  const [selectedFriendId, setSelectedFriendId] = useState<number>(friends[0].id);
  const [messagesByFriend, setMessagesByFriend] = useState<Record<number, Message[]>>({
    1: [
      { id: 1, text: 'Hey there!', sender: 'friend', timestamp: new Date(Date.now() - 3600000) },
      { id: 2, text: 'How are you doing?', sender: 'friend', timestamp: new Date(Date.now() - 1800000) },
      { id: 3, text: "I'm good, thanks!", sender: 'me', timestamp: new Date(Date.now() - 900000) },
    ],
    2: [
      { id: 1, text: 'Hi Jane!', sender: 'me', timestamp: new Date(Date.now() - 7200000) },
      { id: 2, text: 'Are we still meeting tomorrow?', sender: 'me', timestamp: new Date(Date.now() - 3600000) },
    ],
    3: [],
  });

  const selectedFriend = friends.find(friend => friend.id === selectedFriendId)!;
  const messages = messagesByFriend[selectedFriendId] || [];

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
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
        friend={selectedFriend}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;