import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log('I am clicked')}} />
//     </React.Fragment>
//   );
// }

function App() {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

function Cat() {
  return <div>Meow!</div>;
}

export default App;
