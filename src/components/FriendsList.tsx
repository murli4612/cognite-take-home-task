import type { Friend } from "../types";

interface FriendsListProps {
  friends: Friend[];
  selectedFriendId: number;
  onSelectFriend: (id: number) => void;
}

export default function FriendsList({ friends, selectedFriendId, onSelectFriend }: FriendsListProps) {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {friends.map(friend => (
          <li
            key={friend.id}
            className={friend.id === selectedFriendId ? 'selected' : ''}
            onClick={() => onSelectFriend(friend.id)}
          >
            <img src={friend.avatar} alt={friend.name} className="avatar" />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}