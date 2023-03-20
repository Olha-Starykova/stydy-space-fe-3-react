import React, { useEffect, useState } from 'react';
import './index.css'

function Categories({title}) {
    return (
        <>    
            <a className='categories-title' href="">{ title}</a>
        </>
    )
};

export default Categories;