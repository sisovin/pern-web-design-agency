import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './app/store';
import theme from './config/theme';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/404';
import './styles/global.css';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
