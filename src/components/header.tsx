import { Center, Header as MantineHeader, Title } from '@mantine/core';
import { IconRobot, IconUser } from '@tabler/icons-react';

export function Header() {
  return (
    <MantineHeader height='3rem'>
      <Center h='100%'>
        <IconUser />
        <Title m='sm' order={2}>
          mkvlrn - visor.ai challenge
        </Title>
        <IconRobot />
      </Center>
    </MantineHeader>
  );
}
