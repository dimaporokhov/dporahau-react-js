import React from "react";
import "./Header.css"

const header = props => <div className='Header'>
                          <h2 className='Header-text'>{props.children}</h2>
                        </div>

export default header;
