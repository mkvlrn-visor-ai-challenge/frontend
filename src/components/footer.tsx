import { Button, Group, Footer as MantineFooter, TextInput } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';

import { useChatState } from '#/recoil/state.js';
import { waitForElement } from '#/utils/element-observer.js';

export function Footer() {
  const [msg, setMsg] = useState('');
  const { chatId, pushMessage, waitingResponse, setWaitingResponse } = useChatState();

  const handleMsgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const handleClick = async () => {
    const userTimestamp = Date.now();
    pushMessage({ from: 'user', text: msg, timestamp: userTimestamp });
    // waits for new message to appear in html, then scrolls it into view
    let bottom = (await waitForElement(`#timestamp-${userTimestamp}`)) as HTMLDivElement;
    bottom!.scrollIntoView();
    setMsg('');
    setWaitingResponse(true);
    console.log(import.meta.env);

    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL, { msg, chatId });
      const botTimestamp = Date.now();
      pushMessage({ from: 'bot', text: response.data.message, timestamp: botTimestamp });
      // waits for new message to appear in html, then scrolls it into view
      bottom = (await waitForElement(`#timestamp-${botTimestamp}`)) as HTMLDivElement;
      bottom!.scrollIntoView();
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.request, err.toJSON());
      }
    } finally {
      setWaitingResponse(false);
    }
  };

  return (
    <MantineFooter height='3rem'>
      <Group position='center' align='center' h='100%'>
        <TextInput
          value={msg}
          onChange={handleMsgChange}
          placeholder='your message'
          style={{ width: '70%' }}
        />
        <Button onClick={handleClick} ml='xs' disabled={waitingResponse}>
          send
        </Button>
      </Group>
    </MantineFooter>
  );
}
