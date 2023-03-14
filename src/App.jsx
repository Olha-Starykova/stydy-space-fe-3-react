
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card/Card';
import paintings from "./paintings.json";
import HeartButton from "./components/HeartButton/HeartButton"
import "./App.css"

function App() {


    return (

        
        <div>

{/*            
            <ul className='list' >
                {paintings.map((painting) => (
                    <li className='list-item' key={painting.id}>
                        <HeartButton></HeartButton>
                        <Card
                        canBuy="canBuy"    
                        imageSrc={painting.imageSrc}  
                        // title={painting.title="DINING CHAIR BY ESTEBAN+MORENO "} ??? как передать пропсы по условию в map
                        description={painting.description}
                        price={painting.price}
                        />
                        <div className='wrapperBtn' >
                        <Button >LEARN MORE</Button>
                        <Button isLight="black">BUY NOW</Button> 
                        </div>
                       
                    </li>
                ))}
            </ul> */}

            <ul className='list' >
                <li className='list-item' >
               <HeartButton hasSale={true}  ></HeartButton>
                        <Card
                        hasSale={"hasSale"}   
                        canBuy="canBuy"    
                        imageSrc="/images/image_1.jpeg"  
                        title="Dining Chair by esteban+moreno"
                        description="With a new design approach for flexible use: from a dinner for two to a big celebration."
                        price={100}
                        priceSale={120}
                        />
            </li>
                <li className='list-item' >
                     <HeartButton></HeartButton>
                        <Card
                        imageSrc="/images/image_2.jpeg" 
                        title="Underwater wearable watches"
                        description="An accessory for any occasion, from a nice dinner to an underwater swim."
                        price={90}
                        />
                </li>
                <li className='list-item' >
                     <HeartButton></HeartButton> 
                        <Card
                        imageSrc="/images/image_3.jpeg" 
                        title="Sac Marin Yellow"
                        description="Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder."
                        price={108}
                        />
                </li>
            </ul>
    </div> 
    
    )
}
// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);

export default App;