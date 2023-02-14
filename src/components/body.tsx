import { Container } from '@mantine/core';

import { styled } from '#/components/_styled.jsx';

const Messages = styled.div`
  overflow-y: auto;

  span {
    display: block;
  }
`;

export function Body() {
  return (
    <Container fluid style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Messages>
        <span>placeholder msg#1</span>
        <span>placeholder msg#2</span>
        <span>placeholder msg#3</span>
      </Messages>
    </Container>
  );
}
