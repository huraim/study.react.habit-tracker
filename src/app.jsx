import React from 'react';
import './app.css';

function App() {
  const name = 'bh';
  return (
    <React.Fragment>
      <h1>Hello {name} :)</h1>
      {name && <h1> 이름 있다면 {name}</h1>}
      {
        ['★', '■'].map(item => (
        <h1>{item}</h1>
        ))
      }
    </React.Fragment>
  );
}

export default App;
