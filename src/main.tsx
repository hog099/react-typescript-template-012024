import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesApp } from './routes';

import './styles/style.css';
import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <RoutesApp />
        </Router>
    </React.StrictMode>
);
