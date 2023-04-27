import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { GithubProvider } from './context/Github';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GithubProvider>
    <App />
  </GithubProvider>
);
