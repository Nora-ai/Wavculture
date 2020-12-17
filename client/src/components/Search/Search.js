import React from 'react';
import './Search.css'

export default function Search () {

    return (<>

        <form className="search-form-box">
            <div>
                <input
                    placeholder = 'Search'
                />
            </div>

            <div>
                <select>
                    <option value=''>Genre</option>
                    <option>Ambient</option>
                    <option>instrumental</option>
                    <option>Rock</option>
                    <option>Pop</option>
                    <option>Folk</option>
                </select>
            </div>

            <div>
                <select>
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
                <select>
                    <option>UTC</option>
                </select>
                
            </div>

            <div> 
                <select>
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