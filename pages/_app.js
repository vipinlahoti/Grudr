import UserProvider from '../context/userContext';
import '../styles/main.scss';
import '@components';

// Custom App to wrap it with context provider
export default ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
)
