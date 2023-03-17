import "./index.css"

function Hero({link, title, futer, address}) {
    
    return (
   <>
        <div className="container-hero" >
                <a className="link" href="">{link}</a>
                <h1 className="title" >{title}</h1>

                <h3 className="futer" >{futer}<span className="address" >{address}</span></h3>
             
            </div>
   
   </>
       
    )
};

export default Hero;