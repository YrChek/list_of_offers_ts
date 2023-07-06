import React from 'react'

function ProductCard({ item }) {
  const {url, MainImage, title, currency_code, price, quantity } = item
  let currencyCode;
  let level;
  let name;
  switch (item.currency_code) {
    case 'USD':
      currencyCode = `\u0024${price}`;
      break;
    case 'EUR':
      currencyCode = `\u20AC${price}`;
      break;
    case 'GBR':
      currencyCode = `\u00A3${price}`;
      break;
    default:
      currencyCode = `${price} ${currency_code}`;
  }

  if (Number(quantity) <= 10) {
    level = 'item-quantity level-low';
  } else if (Number(quantity) <= 20) {
    level = 'item-quantity level-medium';
  } else {
    level = 'item-quantity level-high';
  }

  if (title.length > 50) {
    name = `${title.slice(0, 50)}...`
  } else {
    name = title
  }
  
  return (
    <div className='item'>
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt='' />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{name}</p>
        <p className="item-price">{currencyCode}</p>
        <p className={level}>{quantity} left</p>
      </div>
    </div>
  )
}

export default ProductCard
