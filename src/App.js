import React from 'react';
import styled from 'styled-components';

import './App.css';
import Tab from './components/Tab';
import AmountForm from './components/AmountForm';

const Width640pxDiv = styled.div`
width: 600px;
min-height: 300px;
margin: auto;

@media (max-width: 640px) {
  width: 100%;
}
`;

function App() {
  return (
    <div className="App">
      <Width640pxDiv>
        <AmountForm />
        <Tab />
      </Width640pxDiv>
    </div>
  );
}

export default App;
