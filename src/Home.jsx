import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export const Home=()=>{
    return(
        <>
        <div className="body">
            <div className='Nav'>
                <Link to={'/Dash'}>
                    <h1>Go to Information Page</h1>
                </Link>
            </div>
        </div>
        </>
    )
}