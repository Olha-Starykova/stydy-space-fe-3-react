


import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./components/Hello";

function App() {

//Task 1

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};

[users.make, users.bob, users.nikola] = usersNames;
//console.log(users)// {make: 'Mike', bob: 'Bob', nikola: 'Nikola'}

//Task 2

let salaries = {
  "Mike": 1500,
  "Bob": 1800,
  "Nikola": 1700,
};


function maxSalary(salaries){
  let maxName = null;
  let maxSalary = 0;

 for(const [name, salary] of Object.entries(salaries)) {
    if(maxSalary < salary){
          maxSalary = salary;
          maxName = name;
    }   
  }
 return maxName
}


//console.log(maxSalary(salaries))  //Bob


//Task 3

let userss = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};

let { mike: userMike, bob: UserBob, nikola: UserNikola} = userss;
//console.log(userMike, UserBob, UserNikola)



//Task 4

  return (
   <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
    <Hello></Hello>
    <button onClick={() => console.log('Click on button')}>Button</button>
    </div>
    );
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

export default App;