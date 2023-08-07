import { FC } from 'react';

import { PageRouter } from './utils/router';
import { Navigation } from './components/Navigation';

export const App: FC = () => {
  return (
    <>
      <Navigation />

      <PageRouter />
    </>
  );
};

export default App;
