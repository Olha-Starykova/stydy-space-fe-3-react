import React from 'react';
import ReactDOM from 'react-dom/client';
//import Hello from "./components/Hello";
import Hero from "./components/Hero/Hero"
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import "./App.css"

function App() {


  return (

    <>
      <div className='container' >
        <Hero
          link="abc.com"
          title="abc.com is the best place to find remote talent. Weve been super impress by the quality of applicants."
          futer="Madhushan sasanka"
          address="CEO, abc.com"
          />
        <RegistrationForm>
       
      </RegistrationForm>
      </div>
     
      

    </>

  //  <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
  //   <Hello></Hello>
  //   <button onClick={() => console.log('Click on button')}>Button</button>
  //   </div>
    );
}


export default App;