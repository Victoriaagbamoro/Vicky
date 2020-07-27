import React, { useState, useRef } from 'react';
import './Slider.css';

function Slider() {
    const [right, setRight] = useState(true)
    const iconSpan = useRef(null);
    const form = useRef(null);
   
    function slideInOut(){
        iconSpan.current.classList.toggle('slideIn')
        form.current.classList.toggle('slideIn')
        setRight(!right)
    }
    
    return (
          <div  className="Form">
            <span ref={iconSpan} className="arrow">
                {right === true ? <i id="slider-btn"  onClick={slideInOut} className="fa fa-angle-right"></i> :
                <i id="slider-btn"  onClick={slideInOut} className="fa fa-angle-left"></i>}
            </span>
            <span></span>
            
                <form ref={form}>
                    <img src="https://i.ibb.co/zZWDSmv/sisicakes-removebg-preview.png" alt="sisicakes-removebg-preview" width="200px" height="100px"/>
                    <p>Select A cake and get it delivered to your door step</p>
                    <p></p>
                    <h5>Basket Items</h5>
                    <p>No items added yet</p>
                    <p></p>

                    <label htmlFor="Address">Address</label>
                    <input type="text" placeholder="Delivery Address" name="address" id="address" required></input>
                    
                    <label htmlFor="cars">Choose a City</label>
                    <select id="city">
                        <option label="Lagos">Lagos</option>
                        <option label="Abuja">Abuja</option>
                        <option label="Port Harcourt">Port Harcourt</option>
                        <option label="Ibadan">Ibadan</option>
                    </select>
                    
                    <label htmlFor="phone numbers">Phone Numbers</label>
                    <input type="text" placeholder="Phone Number" name="phone number" id="phone number" required></input>
                    <input type="submit" value="Pay N23,000"/>
                    
                </form>
        </div>
    )
}

export default Slider
