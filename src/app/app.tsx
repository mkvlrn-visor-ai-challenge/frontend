import { AppShell } from '@mantine/core';
import { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { Body } from '#/components/body.jsx';
import { Footer } from '#/components/footer.jsx';
import { Header } from '#/components/header.jsx';
import { useChatState } from '#/recoil/state.js';

export function App() {
  const { setChatId, setMessages } = useChatState();

  useEffect(() => {
    setChatId(uuidV4());
    setMessages([]);
  }, [setChatId, setMessages]);

  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      padding='md'
      styles={(theme) => ({ main: { backgroundColor: theme.colors.gray[0] } })}
    >
      <Body />
    </AppShell>
  );
}
