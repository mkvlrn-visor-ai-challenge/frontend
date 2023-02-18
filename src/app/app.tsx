import { AppShell, Modal, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { Body } from '#/components/body.jsx';
import { Footer } from '#/components/footer.jsx';
import { Header } from '#/components/header.jsx';
import { useChatState } from '#/recoil/state.js';

export function App() {
  const { setChatId, setMessages } = useChatState();
  const [warningModal, setWarningModal] = useState(true);

  const email = (
    <Text span weight='bold'>
      mkvlrn@gmail.com
    </Text>
  );

  useEffect(() => {
    setChatId(uuidV4());
    setMessages([]);
  }, [setChatId, setMessages]);

  return (
    <AppShell header={<Header />} footer={<Footer />} padding='md'>
      <Modal opened={warningModal} onClose={() => setWarningModal(false)} title='backend offline'>
        <Text>
          hey guys! i took the backend offline for a while because of openai costs, but let me know
          if you want it back online for any reason! drop me a line at {email}. later!
        </Text>
      </Modal>
      <Body />
    </AppShell>
  );
}
