import React from 'react';
import { lastIndexOf, substr } from '@7urtle/lambda';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

/**
 * Turns URL path into router basename by removing everything after the last slash
 *
 * @HindleyMilner getBasename :: string -> string
 *
 * @pure
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 *
 * @example
 * getBaseName('/some/structure/page'); // => '/some/structure'
 */
const getBasename = (path) => substr(lastIndexOf('/')(path))(0)(path);

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <div>
      <header>
        <h1>Patient Health Questionnaire and General Anxiety Disorder</h1>
        <h2>(PHQ-9 and GAD-7) </h2>
      </header>
      <article>
        <Router basename={getBasename(window.location.pathname)}>
          <Routes />
        </Router>
      </article>
    </div>
  );
};

export default App;
