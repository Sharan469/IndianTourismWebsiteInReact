import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import buddhist from './images/Himachal/gurudwara.jpg';
import rockcut from './images/Himachal/Jubbal.jpg';
import amber from './images/Himachal/mukta.jpg';
import hampi from './images/Himachal/paddam.jpg';
import chennai from './images/Himachal/Sakya.jpg';
import katarmal from './images/Himachal/katarmal.jpg';
import bajinath from './images/Himachal/bajinath.jpg';
import tungnath from './images/Himachal/tungnath.jpg';
import lakhamandal from './images/Himachal/lakhamandal.jpg';
import kedarnath from './images/Himachal/kedarnath.jpg';

function CardN() {
  return (
    <div className='cards'>
      
     {/* {<img src={buddhist} alt="Logo" /> */} 
     <div className='cards__container'>
        <div className='cards__wrapper'>
        <h2></h2>
        <br />
        <br />
        <br />
          <ul className='cards__items'>
              
              <br />
            <CardItem
              src={kedarnath} 
              text='Kedarnath-The temples architecture style is said to be the same as most ancient temples of its period - the ashlar style of construction - wherein stone slabs are interlocked into each other without the use of mortar or cement.'
              
            />
            <CardItem
              src={tungnath} alt="Rockcut"
              text='Tungnath is one of the highest Shiva temples in the world and is the highest of the five Panch Kedar temples located in Rudraprayag district, in the Indian state of Uttarakhand.'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={bajinath} alt="Amber"
              text='Bajinath temple  was built in 8th Century by two local merchants named Ahuka and Manyuka. It is dedicated to Lord Shiva as Vaidyanath the Lord of physicians.'
              path='https://en.wikipedia.org/wiki/Baijnath_Temple'
            />
            <CardItem
              src={lakhamandal} alt="Hampi"
              text='Lakmandal  temple is popular among the Shakti Cult, who believe that a visit to this temple shrine will end their misfortunes. It has huna architecture'
              
              path='https://en.wikipedia.org/wiki/Lakhamandal'
            />
            <CardItem
              src={katarmal} alt="Tamil Nadu"
              text='The style of architecture of the temple is Nagara style. The temple had intricately carved wooden doors and pillars that were shifted to the National Museum in Delhi after the theft of a priceless 10th century idol from the temple premises..'
            
              path='https://blogvirasatehind.wordpress.com/2017/05/24/katarmal-sun-temple-interesting-intriguing-invisible/#:~:text=The%20style%20of%20architecture%20of,idol%20from%20the%20temple%20premises.'
            />
          </ul>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h2></h2>
        <br />
        <br />
        <br />
          <ul className='cards__items'>
              
              <br />
            <CardItem
              src={hampi} 
              text='Padam palace is a private property of the Royal family of Bushahr. Raja Padam Singh laid the foundation stone of this palace in the year 1919. At the entrance of the palace, a brilliant wooden carved idol of Balaji was kept. This long building with ash grey stone pillars, chocolate brown carved wood first floor, and a red coloured slanted roof is marvellous. Blue doors with multi-colored stained glasses provided the richness at the base level. If you peep inside through these glasses, you see huge halls with little furniture but similar doors on the other side. The colourful glasses bringing in the sunlight split in multiple colours.'
              
            />
            <CardItem
              src={rockcut} alt="Rockcut"
              text='Raja Rana Sir Bhagat Chandra demolished the original Victorian structure in 1938. Later, on the same site a summer palace was built in a unique blend of Indian and Chinese architecture styles. The exteriors flaunt exquisite features like an elaborate citadel and walls with convoluted artistry. In the interiors, visitors will find intricately carved structures of timber, suspended attics and signed photographs and paintings of eminent people.'
             
            />
          </ul>
          <div>
            <h2></h2>
          </div>
          <br />
          <br />
          <ul className='cards__items'>
            <CardItem
              src={buddhist} alt="Amber"
              text='Sikh Architecture is a style of architecture that was developed under Sikh Empire during 18th and 19th century in the Punjab region. Due to its progressive style, it is constantly evolving into many newly developing branches with new contemporary styles.'
            />
            <CardItem
              src={amber} alt="Hampi"
              text='Mukta Top is an untouched trek in Garhwal Himalayas in Uttarkashi district at an altitude of 3,608 m. The unique features of this trek make it a surpassing winter trek. This trek is not known by the people yet but when the trekking enthusiasts will come to know about this captivating place they would surely choose “Mukta Top” as their next trekking destination.'
              
            />
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardN;