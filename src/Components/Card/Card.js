import React from "react";
import './Card.css'

const card = props => <div className='Card'>
                        <h2 className='Content'>{props.caption}</h2>
                        <hr className='Line'/>
                        <p className='Content'>{props.children}</p>
                      </div>

export default card;
