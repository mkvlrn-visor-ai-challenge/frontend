import { AppShell } from '@mantine/core';

import { Body } from '#/components/body.jsx';
import { Footer } from '#/components/footer.jsx';
import { Header } from '#/components/header.jsx';

export function App() {
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
