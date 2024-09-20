import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './Sections';
import { Container } from './Components';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>,
);
