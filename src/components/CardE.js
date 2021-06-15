import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import qutub from './images/East/qutub.jpg';
import rumtek from './images/East/rumtek.jpg';
import tajmahal from './images/East/tajmahal.jpg';
import tsuklakhang from './images/East/tsuklakhang.jpg';
import redfort from './images/East/redfort.jpg';
import humayun from './images/East/humayun.jpeg';
import lotus from './images/East/lotus.jpg';


function CardE() {
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
              src={rumtek} 
              text='One of most famous monasteries here is the Rumtek Monastery. Also known as Dharmachakra Centre, the monastery is one of the most coveted sites in Gangtok. It is located about 24 kilometres away from the main town and features classic Tibetan Buddhist architecture. With the main temple, a mastic college and a stupa, the Rumtek Monastery is a favourite with photographers. However, while photographs can be taken from the outside, photography is prohibited inside the building.'
              
            />
            <CardItem
              src={tsuklakhang} alt="Rockcut"
              text='Another classic example of Tibetan Buddhist architecture in Gangtok is the Tsuklakhang Palace, also known as the Tsuklakhang Royal Chapel. The main entrance to the monastery is a beautiful arch sporting typical Tibetan Buddhist architecture. The whitewashed walls of the four-storeyed monastery building are made of stone and trimmed timber and are topped with a fanciful roof.'
             
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
              src={qutub} 
              text='The Qutb Minar is inspired by the Minaret of Jam in Afghanistan, it is an important example of early Afghan architecture, which later evolved into Indo-Islamic Architecture. The Qutb Minar is 72.5 metres (239 ft) high, making it the tallest minaret in the world built of bricks.'
              
            />
            <CardItem
              src={tajmahal} alt="Rockcut"
              text='It was designed by Ustad Ahmad Lahauri, and is generally regarded as the best example of Mughal architecture, which is a blend of Indian, Persian and Islamic styles. The architectural principles the Taj Mahal encapsulates include: Rational and strict geometry. Perfect symmetrical planning.'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={lotus} alt="Amber"
              text='The Lotus Temple was consecrated and opened to the public in December 1986. It was designed by Iranian architect Fariborz Sahba, who won acclaim for the project even before the temple was completed. It subsequently received several awards. The Lotus Temple derives its name from its design.'
              path='https://en.wikipedia.org/wiki/Baijnath_Temple'
            />
            <CardItem
              src={redfort} alt="Hampi"
              text='A few parts of the fort are also made of red stone while the remaining structure is built using marble. The structure, which is in the shape of an irregular octagon, incorporates elements of garden design and also features turrets, bastions, pavilions, two gates, and several other sections.'
              
              path='https://en.wikipedia.org/wiki/Lakhamandal'
            />
            <CardItem
              src={humayun} alt="Tamil Nadu"
              text='This structure is known for its unique architecture, as it is octagonal on the outside while square within; its ceiling is decorated with painted and incised plaster, it has a high neck dome and shows a conspicuous absence of a double dome feature, common to tombs of the period.'
            
              path='https://blogvirasatehind.wordpress.com/2017/05/24/katarmal-sun-temple-interesting-intriguing-invisible/#:~:text=The%20style%20of%20architecture%20of,idol%20from%20the%20temple%20premises.'
            />
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default CardE;
