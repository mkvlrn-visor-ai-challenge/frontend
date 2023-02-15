import { Grid, Paper, Stack, Text } from '@mantine/core';
import { IconRobot, IconUser } from '@tabler/icons-react';

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
          <Grid.Col span={1} sx={{ borderRight: '0.1rem dashed' }}>
            <Stack align='center' spacing='xs'>
              <IconRobot size={48} />
              <Text size='xl' weight='bold'>
                {from}
              </Text>
            </Stack>
          </Grid.Col>
        )}
        <Grid.Col span='auto'>
          <Grid.Col span={12}>{text}</Grid.Col>
          <Grid.Col>
            <span id={`timestamp-${timestamp}`}>{timestamp}</span>
          </Grid.Col>
        </Grid.Col>
        {from === 'user' && (
          <Grid.Col span={1} sx={{ borderLeft: '0.1rem dashed' }}>
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
