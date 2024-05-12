import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import Provider from './provider/Provider.jsx';
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </HelmetProvider>,
)
