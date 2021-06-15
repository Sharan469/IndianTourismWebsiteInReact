import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import buddhist from './images/buddhist.jpg';
import rockcut from './images/rockcut.jpg';
import amber from './images/amber.jfif';
import hampi from './images/hampi.jpg';
import chennai from './images/chennai.jpg';
import tajmahal from './images/tajmahal.jpg';
import qutub from './images/qutub.jpg';
import lotus from './images/lotus.jpg';
import mysore from './images/South/mysore.jpg';
import rumtek from './images/East/rumtek.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>New Articles</h1>
      
     {/* <img src={buddhist} alt="Logo" /> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={hampi} alt="Hampi"
              text='Situated on the southern bank of River Tungabhadra, Hampi is monument city that is gradually becoming a popular tourist destination in North Karnataka and boasts once being the seat of Vijayanagara Empire.'
            //path='https://reactrouter.com/web/example/url-params'
            />
            
            <CardItem
              src={lotus} alt="Amber"
              text='The Lotus Temple was consecrated and opened to the public in December 1986. It was designed by Iranian architect Fariborz Sahba, who won acclaim for the project even before the temple was completed. It subsequently received several awards. The Lotus Temple derives its name from its design.'
              //path='/east'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={rumtek} 
              text='One of most famous monasteries here is the Rumtek Monastery. Also known as Dharmachakra Centre, the monastery is one of the most coveted sites in Gangtok. It is located about 24 kilometres away from the main town and features classic Tibetan Buddhist architecture.'
              
            />
          
            <CardItem
              src={chennai} alt="Tamil Nadu"
              text='Pallava art and architecture represent an early stage of Dravidian art and architecture which blossomed to its fullest extent under the Chola Dynasty. The first stone and mortar temples of South India were constructed during Pallava rule and were based on earlier brick and timber prototypes.'
             // path='/south'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={tajmahal} alt="Taj Mahal"
              text='It was designed by Ustad Ahmad Lahauri, and is generally regarded as the best example of Mughal architecture, which is a blend of Indian, Persian and Islamic styles. The architectural principles the Taj Mahal encapsulates include: Rational and strict geometry. Perfect symmetrical planning.'
              //path='/east'
            />

            <CardItem
             src={qutub}
              text='The Qutb Minar is inspired by the Minaret of Jam in Afghanistan, it is an important example of early Afghan architecture, which later evolved into Indo-Islamic Architecture. The Qutb Minar is 72.5 metres (239 ft) high, making it the tallest minaret in the world built of bricks.'
              //path='/east'
            />


            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;