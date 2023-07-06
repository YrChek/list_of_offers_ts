import Listing from './Components/Listing';
import { catalog } from './data/catalogs';
import type { Item } from './Components/Types';
import './App.css';

const data = JSON.stringify(catalog, ['listing_id', 'state', 'url', 'MainImage', 'url_570xN', 'title', 'currency_code', 'price', 'quantity']);

const json = JSON.parse(data) as Array<Partial<Item>>;

const items = json.filter((el) => el.state === 'active') as Array<Item>

function App() {
  return (
    <div className="item-list">
      <Listing items={ items } />
    </div>
  );
}

export default App;
