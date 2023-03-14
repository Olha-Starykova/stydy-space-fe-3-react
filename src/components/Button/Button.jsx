import "./index.css"

function Button({isLight, children}) {

    return (
     
             <button className={`btn-wrapper ${isLight ? 'grey' : ''}`}>{children}</button>

    )
 
}

export default Button;