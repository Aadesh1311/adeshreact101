
import './App.css';
import Navbar from './component/Navbar';
import Restaurants from './component/Restaurants';
import Offers from './component/Offers';
import Filters from './component/Filters';
import userInfo from './data/userInfo.json'
import offers from './data/offers.json';
import restaurants from './data/restaurants.json';

function App() {
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
    <section className="near-you">
      <Filters/>
      <Restaurants restaurants={restaurants}/>
    </section>
    </div>
  );
}

export default App;
