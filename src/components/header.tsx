import { Center, Header as MantineHeader, Title } from '@mantine/core';

export function Header() {
  return (
    <MantineHeader height='3rem'>
      <Center h='100%'>
        <span className='fa-solid fa-user' />
        <Title size='xl' m='sm'>
          mkvlrn - visor.ai challenge
        </Title>
        <span className='fa-solid fa-robot' />
      </Center>
    </MantineHeader>
  );
}
