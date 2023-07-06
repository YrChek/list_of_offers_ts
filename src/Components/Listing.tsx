import type { Item } from './app';
import ProductCard from './ProductCard';

function Listing( { items }: lis) {

  return (
    <>
      {items.map((el) => el.state === 'active' ? <ProductCard item={ el } key={el.listing_id}/> : <div key={el.listing_id}></div>)}
    </>
  )
}

export default Listing

type lis = {
  items: Array<Item>
}
