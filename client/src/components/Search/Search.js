import React from 'react';
import './Search.css'

export default function Search () {

    return (<>

        <form className="search-form-box">
            <div>
                <input
                    className="search-input"
                    placeholder = 'Search'
                />
            </div>

            <div>
                <select className="select-genre">
                    <option value=''>Genre</option>
                    <option>Ambient</option>
                    <option>instrumental</option>
                    <option>Rock</option>
                    <option>Pop</option>
                    <option>Folk</option>
                </select>
            </div>

            <div>
                <select className="select-day">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
            </div>
    
            <div>
                <select className="select-time">
                    <option>UTC</option>
                </select>
                
            </div>

            <div> 
                <select className="select-city">
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Australia</option>
                    <option>South Africa</option>
                </select>
            
            </div>

            <div>
                <label>
                    Festival
                    <input
                        type="checkbox"
                        name="Festival"
                    />
                </label>
            </div>

            <div>
                <label>
                    Recurring
                    <input
                        type="checkbox"
                        name="Recurring"
                    />
                </label>
            </div>

        </form>
    
    </>)
}