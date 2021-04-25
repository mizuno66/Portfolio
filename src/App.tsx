import { FC } from 'react';
import Main from 'components/pages/Main';
import { MediaQueryProvider } from 'components/provider/MediaQueryProvider';

const App: FC = () => (
  <MediaQueryProvider>
    <Main />
  </MediaQueryProvider>
);

export default App;
