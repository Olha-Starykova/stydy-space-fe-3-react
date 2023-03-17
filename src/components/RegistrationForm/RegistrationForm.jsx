import "./index.css"
import { useState } from 'react';



function RegistrationForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
 
   const handleChangeName = (event) => {
      // console.log(event.target.value)
       setName( event.target.value)
    }
    
    
   const handleChangeEmail = event => {
     //  console.log(event.target.value)
       setEmail( event.target.value)
    }
   const handleChangePassword = event => {
      // console.log(event.target.value)
       setPassword( event.target.value)
    }
   

       const handleSubmit = (e) => {
           e.preventDefault();

           if (isNaN(e.target.elements.name.value) ) {
               let arr = e.target.elements.name.value.split('')

               arr.map(el => {
                   Number(el) ? e.target.elements[0].setCustomValidity('Введите корректное  имя.') || (e.target.elements.name.classList.add('input-title-invalid')) :
                    console.log(`Ваше имя: ${e.target.elements.name.value}`) 
               })  
           }

           if (Number(e.target.elements.name.value)) { e.target.elements[0].setCustomValidity('Введите корректное имя.')||(e.target.elements.name.classList.add('input-title-invalid')) 
            
           }
           if ((e.target.elements.name.value).length <= 1) {
               e.target.elements[0].setCustomValidity('Введите корректное  имя.') || (e.target.elements.name.classList.add('input-title-invalid')) 
           }
       
           if (e.target.elements.email.value) {
           const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
           const ok = re.test(e.target.elements.email.value);
               ok ? console.log(`Ваш email: ${e.target.elements.email.value}`) : (e.target.elements[1].setCustomValidity('Введите корректный email.') || (e.target.elements.email.classList.add('input-title-invalid'))) 
            
           }
      }

    
    return (
        <>
            <div className="container-RegistrationForm" >
                <form className="registration-form " name="registration" method="POST" action="#"
                     onSubmit={handleSubmit}
                >
                    <h2 className="form-title" >Create an account</h2>
                    <span className="form-description" >Lets get started with your 30 days free trial</span>
                    <div className="div-input" >

                        <label className="label-title"  htmlFor="GET-name">Name</label>
                        <input className={`input-title ${!handleSubmit ? 'input-title-invalid' : ''}`} id="GET-name" type="text"
                            name="name"
                            value={name}
                            onChange={handleChangeName}
                            required
                        ></input>        
                        
                        <label className="label-title"  htmlFor="Email">Email</label>
                        <input className="input-title" id="Email" type="text"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                            required
                        >   
                        </input>  
                        
                        <label className="label-title"  htmlFor="Password">Password</label>
                        <input className="input-title" id="Password" type="text" name="password" value={password}
                        onChange={handleChangePassword}></input>   
                        
                        <div className="div-submit" >
                            <button className="form-submit-black" type="submit" >Create Account</button>
                            <button className="form-submit-white" type="submit">Sign up with Google</button> 
                            <img className="vector-svg" src="./icons/Vector.svg" alt="" />
                        </div>
                       <span className="form-futer" >Already have an account?<a className="form-futer-link" href="">Sign in</a></span>
                    </div>     
                </form>
            </div>
        </>
    )
};

export default RegistrationForm;

  