import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ajanta from './images/West/ajanta.jpg';
import amber from './images/West/amber.jpg';
import junagarh from './images/West/junagarh.jpg';
import mehrangarh from './images/West/mehrangarh.jpg';
import modhera1 from './images/West/modhera1.jpg';
import palitana from './images/West/palitana.jpg';
import pratapgad from './images/West/pratapgad.jpg';
import raigad from './images/West/raigad.jpg';
import vav from './images/West/vav.jpg';


function CardW() {
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
              src={modhera1} 
              text='Gujarat’s Mehsana district is home to an architectural wonder like no other, the Modhera Sun Temple. It is dedicated to the Sun, and sprawls by the banks of River Pushpavati. While there are no rituals that take place here now, the site is looked after by the Archaeological Survey of India (ASI). The temple follows the Chaulukya style of architecture, and has well-defined, intricate carvings on its walls. It also houses a water reservoir, built like a stepwell. You can visit in during the annual dance festival, Uttarardha Mahotsav, that goes on for three days every January.'
              
            />
            <CardItem
              src={vav} alt="Rockcut"
              text='Rani ki Vav or Ranki vav (Queens stepwell) is a stepwell situated in the town of Patan in Gujarat state of India. It is located on the banks of Saraswati river. Its construction is attributed to Udayamati, daughter of Khengara of Saurashtra, queen of the 11th-century Solanki dynasty and spouse of Bhima I. Silted over, it was rediscovered in 1940s and restored in 1980s by the Archaeological Survey of India. It has been listed as one of UNESCOs World Heritage Sites since 2014.'
             
            />
          </ul>
          <div>
               <h2></h2>
            </div>
            <br />
            <br />
          <ul className='cards__items'>
            
            <CardItem
              src={amber} alt="Hampi"
              text='A fine example of Rajput architecture, Amber Fort can be seen from a distance, as it rises up a rocky mountainside some 11 km from Jaipur. It is mostly meant to be a royal palace. Made of pale yellow and pink sandstone, and white marble, it is divided in four sections, each with its own courtyard.
              As it is located on top of a hill, a number of visitors opt to ride elephants to go up. Due to the known mistreatment of these beautiful animals, the most ethical option, which has been adopted by On The Go Tours, is that of either hopping on a jeep, or to simply walk up
              '
              
              path='https://en.wikipedia.org/wiki/Lakhamandal'
            />
            <CardItem
              src={junagarh} alt="Tamil Nadu"
              text='This is one of the most impressive forts of Rajasthan. It was built between 1589 and 1593 by Raja Rai Singh. The city of Bikaner has developed around it, and indeed the view of the city from the fort is impressive. The main structures within the fort are the palace and the temples, and there are beautiful courtyards, kiosks and balconies, all built in red sandstone. The tiled floors, the intricately decorated doors, and the walls are a work of art.
              There is an interesting museum inside the fort, with an exhibit of manuscripts, jewels, royal costumes, dresses, headgear and even palanquins and a collection of medieval arms.
              '
            
              path='https://blogvirasatehind.wordpress.com/2017/05/24/katarmal-sun-temple-interesting-intriguing-invisible/#:~:text=The%20style%20of%20architecture%20of,idol%20from%20the%20temple%20premises.'
            />
            <CardItem
              src={mehrangarh} alt="Tamil Nadu"
              text='The spectacular Mehrangarh Fort rises from an impregnable, rocky hill standing 120 meters above the skyline of Jodhpur. Built around 1460, there is no doubt that this is one of the most beautiful forts in India. It is still run by the royal family of Jodhpur, and it is packed with history and legend. Inside, there are several palaces and courtyards, as well as a good museum that showcases various palanquins, and elephants’ howdahs (the seats placed on the elephant back in order to ride).
              The sunset views from the fort are stunning, but even more so is the view of the fort itself, from a distance, as reflected on the pond in front of it.
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
              src={ajanta} 
              text='Though Ajanta and Ellora are two separate sites, they are known together. The Ajanta caves are located 107 km from Aurangabad, Maharashtra gives visitors a panoramic view of the whole site. Ajanta has 29 caves reflecting the architectural wonder and excellently portraying painting, sculpture, and stone carving. Ellora has 34 caves, and among those, Kailash Temple is significant as it is the single largest monolithic structure in the world. These rock-cut caves’ ancient beauty will take anyone’s breath away, yet the place is peaceful and serene.'
              
            />
            <CardItem
              src={raigad} alt="Rockcut"
              text='Raigad fort symbolizes historic sites in Maharashtra and boasts of the triumph of Maratha situated at the height of 2690 feet. Located in the green valleys on three sides, the fourth one sees a sequence of stairs leading up. which is why partly for that the enemy was never able to defeat one of the best historical places in Maharashtra.  Shivaji Maharaj called Raigad Fort the capital of the Maratha empire and presided over it. Shivaji Maharaj ashes are buried nearby. In addition to the scenic appeal, witness the ancient tales of the Maratha Kingdom. The sites of Raigad incorporate a wall called Hirakani Buru located at a mountain, Mena Darwaja, Nagarkhana Darwaja, Mena Darwaja, Rani Vasa, Palkhi Darwaja, etc'
             
            />
            <CardItem
              src={pratapgad} alt="Rockcut"
              text='Maharashtra has a huge heritage of hill forts, and Pratapgad Fort in Satara is one of the most precious jewels. Established in the 17th century under the Chatrapati Shivaji rule, the gigantic fortress stretches over lush western Ghats, acting as a shield against enemies.  Also known as the Fort of Valour, it is an iconic monument in Maharashtra.  It was the location of the historic Pratapgad Fight. 
              A visit to the fortress is a journey to nature and a dose of architectural wonder.  Trek the daunting 450 steps from the main village to its very top of the fort, re-living the ancient ornaments and basking in natural beauty.
              '
             
            />
          </ul>
          
        

        </div>
      </div>
    </div>
  );
}

export default CardW;