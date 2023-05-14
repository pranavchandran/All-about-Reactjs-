import React, {useState, useCallback} from 'react';

import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';


function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('App Running');

  const paragraphHandler = useCallback(() => {
    if (allowToggle) {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <React.Fragment>
      <div className="app">
        <DemoOutput output={showParagraph} />
        <Button onClick={allowToggleHandler}>allow Toggle</Button>
        <Button onClick={paragraphHandler}>Click me</Button>
      </div>
    </React.Fragment>
  );
}

export default App;
