import { Button, Group, Footer as MantineFooter, TextInput } from '@mantine/core';

export function Footer() {
  return (
    <MantineFooter height='3rem'>
      <Group position='center' align='center' h='100%'>
        <TextInput placeholder='your message' style={{ width: '70%' }} />
        <Button ml='xs'>send</Button>
      </Group>
    </MantineFooter>
  );
}
