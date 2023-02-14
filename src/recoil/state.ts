import { atom, useRecoilState } from 'recoil';

type Message = {
  from: 'user' | 'bot';
  text: string;
  timestamp: number;
};

const chatIdState = atom({ key: 'chatId', default: '' });

const messagesState = atom<Message[]>({ key: 'messages', default: [] });

const waitingResponseState = atom({ key: 'waitingResponse', default: false });

export function useChatState() {
  const [chatId, setChatId] = useRecoilState(chatIdState);
  const [messages, setMessages] = useRecoilState(messagesState);
  const [waitingResponse, setWaitingResponse] = useRecoilState(waitingResponseState);

  const pushMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  return {
    chatId,
    setChatId,
    messages,
    setMessages,
    pushMessage,
    waitingResponse,
    setWaitingResponse,
  };
}
