import { Grid, Paper, Stack, Text } from '@mantine/core';
import { IconRobot, IconUser } from '@tabler/icons-react';
import dayjs from 'dayjs';

import { MessageData } from '#/recoil/state.js';

export function Message({ from, text, timestamp }: MessageData) {
  return (
    <Paper
      shadow='lg'
      p='xs'
      withBorder
      mb='sm'
      bg={from === 'bot' ? 'gray' : 'lime'}
      ta={from === 'bot' ? 'left' : 'right'}
      c={from === 'bot' ? 'lime' : 'dark'}
    >
      <Grid>
        {from === 'bot' && (
          <Grid.Col span={2} sx={{ borderRight: '0.1rem dashed' }}>
            <Stack align='center' spacing='xs'>
              <IconRobot size={48} />
              <Text size='xl' weight='bold'>
                {from}
              </Text>
            </Stack>
          </Grid.Col>
        )}
        <Grid.Col span='auto'>
          <Grid.Col span={12}>
            <Text size='xl'>{text}</Text>
          </Grid.Col>
          <Grid.Col>
            <Text size='xs' id={`timestamp-${timestamp}`}>
              {dayjs(timestamp).format('DD/MM/YYYY - HH:mm:ss (Z)')}
            </Text>
          </Grid.Col>
        </Grid.Col>
        {from === 'user' && (
          <Grid.Col span={2} sx={{ borderLeft: '0.1rem dashed' }}>
            <Stack align='center' spacing='xs'>
              <IconUser size={48} />
              <Text size='xl' weight='bold'>
                {from}
              </Text>
            </Stack>
          </Grid.Col>
        )}
      </Grid>
    </Paper>
  );
}
