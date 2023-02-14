import { MantineProvider } from '@mantine/core';

export function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <span>hey</span>
    </MantineProvider>
  );
}
