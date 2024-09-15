import React from 'react';
import Navigation from './components/Singular/App/Navigation.jsx';
import Footer from './components/Singular/App/Footer.jsx';
import First from './components/Singular/Landing/First.jsx';
import Second from './components/Singular/Landing/Second.jsx';
import Third from './components/Singular/Landing/Third.jsx';
import Fourth from './components/Singular/Landing/Fourth.jsx';
import Fifth from './components/Singular/Landing/Fifth.jsx';
import Sixth from './components/Singular/Landing/Sixth.jsx';
import Seventh from './components/Singular/Landing/Seventh.jsx';
import Eighth from './components/Singular/Landing/Eighth.jsx';
import Ninth from './components/Singular/Landing/Ninth.jsx';
import Tenth from './components/Singular/Landing/Tenth.jsx';
import LastCard from './components/Singular/Landing/LastCard.jsx';

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
      <Eighth />
      <Ninth />
      <Tenth />
      <LastCard />

      <Footer />
    </main>
  );
};

export default App;
