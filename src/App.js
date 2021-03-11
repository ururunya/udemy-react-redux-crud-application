import React from 'react';

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoAge" }
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

User.defaultProps = {
  age: 1
};

export default App;
