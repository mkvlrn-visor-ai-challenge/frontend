import { Container } from '@mantine/core';

import { styled } from '#/components/_styled.jsx';
import { useChatState } from '#/recoil/state.js';

const Messages = styled.div`
  span {
    display: block;
    font-size: 2rem;
  }
`;

const Message = styled.div``;

export function Body() {
  const { messages, waitingResponse } = useChatState();

  return (
    <Container fluid style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Messages>
        {messages.map((msg) => (
          <Message key={`${msg.timestamp}-${msg.from}`}>
            <span>{msg.from}</span>
            <span>{msg.text}</span>
            <span id={`timestamp-${msg.timestamp}`}>{msg.timestamp}</span>
          </Message>
        ))}
        {waitingResponse && <p>bot is typing...</p>}
      </Messages>
    </Container>
  );
}
