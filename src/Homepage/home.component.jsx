import React from "react";
import './home.styles.css';
import { useState } from "react";

const Home = () => {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return ( 
        <div className="home-component">
            <div className="homepage">
                <div className="block-content">
                    <div className="content">
                        <p className="para">
                            Explore the world <i className="fa fa-globe"></i>
                        </p>
                        <h1>
                            Experience the world most <br />
                            iconic destinations with <br />
                            Jodeed Travels
                        </h1>
                        <p className="para-2">
                            Making our customers happy is our top priority by <br /> 
                            providing as many packages as possible.
                        </p>
                    </div>
                    <div className="location-container">
                        <div className="location">
                            <button>Flight</button>
                            <button>Visa</button>
                        </div>
                        <div className="travel-btn">
                            <form>
                                <select>
                                    <option value='Return Trip'>Return Trip</option>
                                    <option value='One Way'>One Way</option>
                                    <option value='Multi-City'>Multi-City</option>
                                </select>
                                <select>
                                    <option value="">Passenger(s)</option>
                                    <option value='Adult'>Adult</option>
                                    <option value='Children'>Children</option>
                                    <option value='Infant'>Infant</option>
                                </select>
                            </form>
                        </div>
                        <div className="travel-info">
                            <form>
                                <input type='text' value={value} placeholder="From Where" onChange={handleChange}/>
                                <i className="fa fa-exchange"></i>
                                <input type='text' value={value} placeholder="To Where" onChange={handleChange}/>
                                <input type='date' value={value} placeholder="Return On" onChange={handleChange}/>
                                <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-image">
                    <div className="bgColor-shape">
                        <img className="homeImage" src="./back.png" alt="background icon" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;