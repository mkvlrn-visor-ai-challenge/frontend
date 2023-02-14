import { atom, useRecoilState } from 'recoil';

type Message = {
  from: 'user' | 'bot';
  text: string;
  timestamp: number;
};

const chatIdState = atom<string>({ key: 'chatId', default: '' });

const messagesState = atom<Message[]>({ key: 'messages', default: [] });

export function useChatState() {
  const [chatId, setChatId] = useRecoilState(chatIdState);
  const [messages, setMessages] = useRecoilState(messagesState);

  const pushMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  return { chatId, setChatId, messages, pushMessage };
}
