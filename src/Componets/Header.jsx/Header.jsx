import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


function Header(props){
    return(
        <section>
            <div className='container flex-container' >
            {
                props.products.map((el) => {
                    return(
                    <div className='box'>
                        <NavLink to={`/prod/${el.id}`}>
                           <img src={el.image} />
                        </NavLink>
                    </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Header