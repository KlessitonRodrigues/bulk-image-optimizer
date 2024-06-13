import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ApplyProviders from 'src/lib/components/ApplyProviders';
import Router from 'src/pages/routes';

const App = () => {
  return (
    <ApplyProviders>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApplyProviders>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
