import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import anjuthengu from './images/South/anjuthengu.jpg';
import arulmigue from './images/South/arulmigu.jpg';
import brihadeeswara from './images/South/brihadeeswara.jpg';
import golconda from './images/South/golconda.jpg';
import jewish from './images/South/jewish.jpg';
import krishnapuram from './images/South/krishnapuram.jpg';
import meenakshi from './images/South/meenakshi.jpg';
import mysore from './images/South/mysore.jpg';
import srirangapatna from './images/South/srirangapatna.jpg';
import tho from './images/South/tho.jpg';
import hampi from './images/hampi.jpg'


function CardSS() {
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
              src={golconda} 
              text='This is an architectural wonder built by Qutab Shahi Kings. It was a defence fort. Initially, this fort was built by Kakatiya kings using mud in 12th century. Later, this fort was even more fortified by Qutab Shahi in 16th century.
              There are many halls, mosques, apartments and other architectural marvels inside this fort. The gateway in this fort called Balahisar Darwaza is a must watch.
              This fort is built on a hill and there are proper ventilation and many underground tunnel that leads to Durbar Hall. There are two pavilions outside the fort.
              Every evening, light shows are conducted in this fort. Many visual shows are also conducted that explains the history of this fort to all. Those who visit Hyderabad should visit this fort.
              .'              
              
            />
            <CardItem
              src={tho} alt="Rockcut"
              text='This is a historic Hindu temple that was built by Kakatiya kingdom. It is located in Warangal. This building was built in 12th century and stands as an icon of architectural marvels. There are 1000 pillars in this temple and none would intersect the view of main idol of the temple.
              You can see the statue of God from any point of the temple. This temple was destroyed by Muslim invaders.
              '
             
            />
          </ul>
          <div>
               <h2></h2>
            </div>
            <br />
            <br />
          <ul className='cards__items'>
            
            <CardItem
              src={hampi} alt="Hampi"
              text='Situated on the southern bank of River Tungabhadra, Hampi is monument city that is gradually becoming a popular tourist destination in North Karnataka and boasts once being the seat of Vijayanagara Empire. The city is said to have established between AD 1336 – 1570. The major construction is reckoned to have been done during the reigning period of Raja Krishnadeva Raya, the most important ruler of the dynasty. Today, although Hampi lies in ruins but is still an epitome of rich architecture and reflection of passion for constructing massive structures. Amongst the restored edifices in Hampi is the Virupaksha Temple. Spread in 25 sq kms there are a plethora of rock cut structures seeing which you will get awe struck.'
              
              path='https://en.wikipedia.org/wiki/Lakhamandal'
            />
            <CardItem
              src={mysore} alt="Tamil Nadu"
              text='When talking about the historical monuments of Karnataka, it is impossible to not mention the spectacular Mysore Palace. The royal official residence and seat of the Wodeyars (1399 to 1950), the palace is one of the most famous places to see in Mysore, Karnataka.
              The magnificent palace has an Indo-Saracenic layout with blend of Hindu, Islamic and Gothic architectural styles. Standing three-storey tall amid sprawling gardens, the palatial building overlooks the scenic Chamundi Hills. A visit to Mysore Place, introduces you to the historic tales, the lavish way of living, and the royal memorabilia making it an unmissable delight of South India. Plan a visit to Mysore Palace during Dusshera. The 10-day festival is an extravagant celebration, where the palace is decked in its optimum beauty
              '
            
              path='https://blogvirasatehind.wordpress.com/2017/05/24/katarmal-sun-temple-interesting-intriguing-invisible/#:~:text=The%20style%20of%20architecture%20of,idol%20from%20the%20temple%20premises.'
            />
            <CardItem
              src={srirangapatna} alt="Tamil Nadu"
              text='Srirangapatna is one of the top ancient sites in Karnataka. UNESCO even nominated the town as a world heritage site. It is an island town located by the river Kaveri giving it scenic beauty. The town of Srirangapatna boasts the architectural style of the Vijayanagar and Hoysala dynasties. Srirangapatna receives its name from the famous Ranganathaswamy Temple dedicated to Lord Vishnu.
              The Ranganathaswamy Temple is a magnificent temple that beholds the gaze of the tourists. Kunti Betta hill, Balmuri, and Edmuri waterfalls are must-see spots. The town is host to numerous historical monuments and sites like Daria Daulat Bagh, Srirangapatna Fort, Gumbaz of Tipu Sultan, Jama Masjid, Ranganathittu Bird Sanctuary, and much more
              '
            
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
              src={meenakshi} 
              text='Meenakshi Amman (Sanskrit: Meenakshi; Tamil: Meenakshi Amman; Aṅgayaṟkaṇṇi, Meenakshi Amman and Meenakshi Amman), is a Hindu goddess and the main deity of Madurai. She is considered an avatar of the Goddess Parvati. She is the divine consort of Sundareswarar, a form of Shiva. She finds mention in literatures as the princess or queen of the ancient Pandya kingdom who was later elevated to godhood. The goddess is also extolled by Adi Shankara as Shri Vidya. She is also a powerful goddess who fights evil.'
              
            />
            <CardItem
              src={arulmigue} alt="Rockcut"
              text='Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlinga temples. It is one of the 274 Paadal Petra Sthalams, where the three of the most revered Nayanars (Saivite saints), Appar, Sundarar and Tirugnana Sambandar, have glorified the temple with their songs. The temple was expanded during the 12th century by Pandya Dynasty, and its principal shrines sanctum were renovated by Jeyaveera Cinkaiariyan and his successor Gunaveera Cinkaiariyan of the Jaffna kingdom. The temple has the longest corridor among all Hindu temples in India.[1] The temple is located in Rameswaram considered a holy pilgrimage site for Shaivites, Vaishnavites and Smarthas. The presiding deity, the Lingam of Ramanathaswamy (Shiva), was established and worshiped by Rama before crossing his bridge to Lanka.

              
              A visit to the fortress is a journey to nature and a dose of architectural wonder.  Trek the daunting 450 steps from the main village to its very top of the fort, re-living the ancient ornaments and basking in natural beauty.
              '
             
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
              src={anjuthengu} 
              text='As the name indicates Anjuthengu is a place full of coconut trees. Anjuthengu fort or Anjengo fort was established by British East India Company during 17th century. The fort has got much historical relevance as it is the first major trading station of the East India Company.
              It was also the first signaling station for ships arriving to Kerala. Anjuthengu is 36  km  from Thiruvananthapuram. The nearest railway station is Kadakkavur railway station and the nearest airport is Thiruvananthapuram International airport.
              '
              
            />
            <CardItem
              src={krishnapuram} alt="Rockcut"
              text='the Krishnapuram Palace is sure to make itself a place in your heart. Located in near the scenic town of Alappuzha aka Alleppey, this 18th-century place built by the then rulers of the Kingdom of Travancore (in South India) is now a museum protected under the state archaeology department. Built in a typical Kerala style architecture, the Krishnapuram Palace has narrow corridors and dormer windows and the roofs here are pitched.'
              
             
            />
            <CardItem
              src={jewish} alt="Rockcut"
              text='Kerala is one of the few places the Jewish community made an impact in India. In the coastal city of Kochi, Jewish Synagogue or Paradesi synagogue is a major historical monument. The place of worship is one of the oldest existing synagogues in the world. As far as architecture is considered, unique handmade Chinese tiles, Belgian glass, 4th-century copper plates decorate the interiors. It houses souvenirs and records of the history and culture of the region. Two gold crowns gifted to the community by the royalty are preserved here. Enter the synagogue barefoot. It remains closed on Fridays, Saturdays and Jewish holidays for visitors.'
              
             
            />
          </ul>
          
        

        </div>
      </div>
    </div>
  );
}

export default CardSS;