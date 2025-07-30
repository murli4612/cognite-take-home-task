// src/types/index.ts
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