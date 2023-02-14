import { Container } from '@mantine/core';

import { styled } from '#/components/_styled.jsx';
import { useChatState } from '#/recoil/state.js';

const Messages = styled.div`
  overflow-y: auto;

  span {
    display: block;
  }
`;

const Message = styled.div``;

export function Body() {
  const { messages } = useChatState();

  return (
    <Container fluid style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Messages>
        {messages.map((msg) => (
          <Message key={`${msg.timestamp}-${msg.from}`}>
            <span>{msg.from}</span>
            <span>{msg.text}</span>
            <span>{msg.timestamp}</span>
          </Message>
        ))}
      </Messages>
    </Container>
  );
}
