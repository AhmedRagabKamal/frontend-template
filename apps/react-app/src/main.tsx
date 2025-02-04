import { Button, Headline } from '@frontend-template/ui-core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

function App() {
  return (
    <StrictMode>
      <Headline>Hello World</Headline>
      <Button>Click me</Button>
    </StrictMode>
  );
}

const rootElement = document.querySelector('#root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
