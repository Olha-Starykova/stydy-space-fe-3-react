import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css'

function Card({category, title, image, description, author, authorPosition, authorAvatar,publishedAt }) {

    let dates = publishedAt.split(' ')
    // console.log(dates[0])
     

    function formatDate(date) {
        let d = new Date(date);
        let  month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();

    if (month.length < 2) 
       month = '0' + month ;
    if (day.length < 2) 
       day = '0' + day;

    return [day, month, year].join('.');
}
 
//console.log(formatDate(dates[0]));


    return (
        <>
            <div className="wrapper">
                 <div className='category'>
                    <span className='category-span' > {category}</span>
                </div>
                <img className='image' src={image} alt={title} width="310" height='280' />
                 <span className='publishedAt' >{formatDate(dates[0])}</span>
                <div className='list-wrapper' >
                    <h2 className='title' > {title}</h2>
                    <p className='description' > {description}</p>
                    <span className='line' ></span>               
                    <div className='author-wrapper' >
                        <img className='img-authorAvatar' src={authorAvatar} alt={title} width="50" height='50' />
                        <div className='author-wrapper-titile' >
                          <h3 className='author' > {author}</h3>
                          <h3 className='authorPosition' > {authorPosition}</h3>  
                        </div>               
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card