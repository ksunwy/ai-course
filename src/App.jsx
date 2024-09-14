import React from 'react';
import Navigation from './components/Singular/App/Navigation.jsx';
import First from './components/Singular/Landing/First.jsx';
import Second from './components/Singular/Landing/Second.jsx';
import Third from './components/Singular/Landing/Third.jsx';
import Fourth from './components/Singular/Landing/Fourth.jsx';
import Fifth from './components/Singular/Landing/Fifth.jsx';
import Sixth from './components/Singular/Landing/Sixth.jsx';
import Seventh from './components/Singular/Landing/Seventh.jsx';

const App = () => {
  return (
    <main>
      <Navigation />
      
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
    </main>
  );
};

export default App;
