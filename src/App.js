import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoAge", age: 3 }
  ];
  return (
    <div>
      {
        profiles.map((v, i) => {
          return <User name={v.name} age={v.age} key={i} />
        })
      }
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </div>
  );
}

function User(props) {
  return <div>Hi, I am {props.name}, {props.age} years old!</div>;
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
