import UserProvider from '../context/userContext';
import '@components';
import '../styles/main.scss';

// Custom App to wrap
export default ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
)
