import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./components/Hello";
import Card from './components/Card/Card';
import Categories from './components/Categories/Categories'
import './App.css'
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
       // setIsLoading(true)
        axios.get('/articles.json').then((response) => {
            console.log(response.data)
            setData(response.data);
         //   setIsLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }, [])
  
  const [rank, setRank] = useState([])
  useEffect(() => {
    axios.get('/categories.json').then((response) => {
      console.log(response.data)
      setRank(response.data)
    }).catch((err) => {
        console.log(err)
      })
    }, [])

  return (

    <>
      <div className='container' >
        <h1 className='main-title' >Popular topics</h1>

        <ul className='list-rank'>
            <a className='list-link' href="">All</a>
            {rank.map((el) => (
              <li className='list-item-rank' key={el.id}>
                <Categories
                  title={el.title}
                > 
                </Categories>

              </li>
            ))}
          </ul>


     
        <ul className='list' >
        
                {data.map((el) => (
                    <li className='list-item' key={el.id}>
                        <Card
                         image={el.image}  
                         title={el.title} 
                         description={el.description}
                         author={el.author.name}
                         authorPosition={el.author.position}
                         authorAvatar={el.author.avatar}
                         category={el.category.title}
                         publishedAt={el.published_at}
                         />
                       
                    </li>
                ))}
            </ul> 
      </div>  
  
        
  
               {/* <div className="wrapper">
                {isLoading && <div>Loading...</div>}
                {data.map((el, index) => {
                    return <div key={index}>{el.title}</div>
                })

                }
            </div> */}
   
    </>
  //  <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
  //   <Hello></Hello>
  //   <button onClick={() => console.log('Click on button')}>Button</button>
  //   </div>
    );
}
// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);

export default App;