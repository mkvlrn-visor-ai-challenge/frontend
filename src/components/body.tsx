import { Container, Group, Loader } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';

import { styled } from '#/components/_styled.jsx';
import { Message } from '#/components/message.jsx';
import { useChatState } from '#/recoil/state.js';

const Messages = styled.div``;

export function Body() {
  const { messages, waitingResponse } = useChatState();

  return (
    <Container mt='4rem' mb='4rem'>
      <Messages>
        {messages.map((msg) => (
          <Message
            key={`${msg.timestamp}-${msg.from}`}
            from={msg.from}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
        {waitingResponse && (
          <div id='bot-is-typing'>
            <Group>
              <IconRobot />
              <Loader variant='dots' c='lime' />
            </Group>
          </div>
        )}
      </Messages>
    </Container>
  );
}
