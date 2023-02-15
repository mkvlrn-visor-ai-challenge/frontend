import { ActionIcon, Group, Footer as MantineFooter, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCircleArrowRight, IconMessageDots } from '@tabler/icons-react';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

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

    try {
      bottom = (await waitForElement('#bot-is-typing')) as HTMLDivElement;
      bottom!.scrollIntoView();

      const response = await axios.post(import.meta.env.VITE_BACKEND_URL, { msg, chatId });
      const botTimestamp = Date.now();
      pushMessage({ from: 'bot', text: response.data.message, timestamp: botTimestamp });

      bottom = (await waitForElement(`#timestamp-${botTimestamp}`)) as HTMLDivElement;
      bottom!.scrollIntoView();
    } catch (err) {
      showNotification({
        title: 'server error',
        message: 'there was a server error, try again in a few moments',
        color: 'red',
      });
      if (err instanceof AxiosError) {
        console.log(err.request, err.toJSON());
      } else {
        console.log(err);
      }
    } finally {
      setWaitingResponse(false);
    }
  };

  const handleEnter = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      await handleClick();
    }
  };

  return (
    <MantineFooter height='3rem'>
      <Group position='center' align='center' h='100%'>
        <TextInput
          icon={<IconMessageDots size={24} stroke={1.5} />}
          radius='xl'
          rightSection={
            <ActionIcon
              onClick={handleClick}
              disabled={waitingResponse || msg === ''}
              size={32}
              variant='transparent'
            >
              <IconCircleArrowRight size={24} stroke={1.5} />
            </ActionIcon>
          }
          value={msg}
          onChange={handleMsgChange}
          onKeyUp={handleEnter}
          placeholder='your message'
          w='70%'
        />
      </Group>
    </MantineFooter>
  );
}
