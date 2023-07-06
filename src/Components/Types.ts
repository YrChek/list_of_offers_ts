export interface Item {
  currency_code: string,
  listing_id: number,
  price: string,
  quantity: number,
  state: string,
  title: string,
  url: string,
  MainImage: MainImage
}

type MainImage = {
  listing_id: string,
  url_570xN: string
}

export type Listing = {
  items: Array<Item>
}

export type ProductCard = {
  item: Item
}
