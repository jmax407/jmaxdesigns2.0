import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { render } from 'react-dom';

function App() {
  const [categories] = useState([
    { name: 'web app'},
    { name: 'email'}
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [isAbout, setIsAbout] = useState(true);
  const [isResume, setIsResume] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isContact, setIsContact] = useState(false);


  let isPage

      //  if (isPortfolio) {
      //   isPage = <Portfolio></Portfolio>
      // } else if (isContact) {
      //   isPage = <Contact></Contact>
      // } else if(isResume) {
      //   isPage = <Resume></Resume>
      // } else {
      //   isPage = <About></About>
      // }

  
  
  return (
    <>
    <Nav
      isAbout={setIsAbout}
      isResume={setIsResume}
      isPortfolio={setIsPortfolio}
      isContact={setIsContact}
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
    ></Nav>
    <main>
    <Portfolio></Portfolio>
    <Contact />
    </main>
    </>
  );
}

export default App;