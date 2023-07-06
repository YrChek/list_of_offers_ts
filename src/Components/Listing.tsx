import type { Listing } from './Types';
import ProductCard from './ProductCard';

function Listing( { items }: Listing) {


  return (
    <>
      {items.map((el) => el.state === 'active' ? <ProductCard item={ el } key={el.listing_id}/> : <div key={el.listing_id}></div>)}
    </>
  )
}

export default Listing
