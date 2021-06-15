import React, { useState } from 'react';
import './Searchtag.css';
import { Link } from 'react-router-dom';
import './Button.css';

function Searchtag() {
    
    return (
        <div className="search">
          <div class="s">
            <h1>"Explore the Unseen!"</h1>
            <br />
            <br/>
            <p >North India includes some highly regarded historical, architectural and archaeological treasures of India. North India Tour will take you to its historic, majestic and celestial destinations such as Delhi, Himachal Pradesh, Jammu & Kashmir, Rajasthan, Punjab, Haryana, Uttar Pradesh and Uttaranchal, which overflow with attractions.</p> 
            <br />

            <p>South India is home to fantastic wildlife, great beaches and serene backwaters.  The palm-fringed canals, spirituality, and pristine beaches are some of the reasons that make the discerning travelers a chance to wander to the unfailing and unbeatable tranquility of the gorgeous places in South India. </p>
            <br />

<p>Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monastries, buddhist circuit with a rural touch. Most Popular tourist destinations for this region are, Calcutta, Former Captal of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling etc.</p>

<br />
<p>Western India comprises of the states of Goa, Gujarat, Maharashtra, Madhya Pradesh and the union territory of Daman and Diu. Boasting of a rich cultural heritage, this part of the country houses some exemplary tourist sites including magnificent monuments, which are embodiments of the glorious architectural heritage of ancient India. </p>
<br />
            <br/>
              <Link
                to='/westindia'
                className='links'
              ><button className='btn--large' style={{float :'centre'}}>WEST INDIA</button>
              </Link>
              <li className='btn--primary'>
              <Link
                to='/northindia'
                className='links'
              ><button className='btn--large' style={{float :'c'}}>NORTH INDIA</button>
              </Link>
              <div id='image' style={{float : 'c'}}><img src="https://media.discordapp.net/attachments/737921353235038235/851918550846406656/image.jpg?width=670&height=670" width="200px;" height="200px;"/></div>
            <Link
                to='/southindia'
                className='links'
              ><button className='btn--large' style={{float :'c'}}>SOUTH INDIA</button>
              </Link>
              </li>
              <Link
                to='/eastindia'
                className='links'
              ><button className='btn--large' style={{float : 'center'}}>EAST INDIA</button>
              </Link>
             
           </div> 
        </div>
    )
}

export default Searchtag

