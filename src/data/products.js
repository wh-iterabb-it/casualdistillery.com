// src/data/products.js
const products = [
  {
    'id': 'dark-rum',
    'name': 'Dark Rum',
    'dek': 'Naturally flavored Rum',
    'description': 'Naturally flavored Rum',
    'image': '2017-rum.jpg',
    'cover': '2017-rum-cover.jpg',
    'link': 'na',
    'ingredients': [
      {
        'name': 'Lyles Black Treacle',
        'description': '11-12 pounds of Abram Lyle & sons traditional molasses. A particularly dark, intense ingredient Lyles Black Treacles departs a distinctive bitter-sweet flavour and brings a beautiful richness',
        'type': 'fermentable',
        'link': 'https://www.lylesgoldensyrup.com/our-range/our-classic-tin/product-black-treacle',
      },
    ],
  },
  {
    'id': 'queens-cut',
    'name': 'Queen\'s cut',
    'dek': 'Naturally flavored Rum',
    'description': 'Naturally flavored Rum',
    'image': '2018-rum.jpg',
    'cover': '2018-rum-cover.jpg',
    'link': 'na',
    'ingredients': [
      {
        'name': 'Lyles Golden Syrup',
        'description': '11-12 pounds of Abram Lyle & sons light and golden molasses. Lyles Golden Syrup departs a mild and more subtle flavor to this sweet liquor',
        'type': 'fermentable',
        'link': 'https://www.lylesgoldensyrup.com/our-range/our-classic-tin/product-golden-syrup',
      },
    ],
  },
  {
    'id': 'casual-gin',
    'name': 'Gin',
    'dek': 'Vapor infused with organic aromatics',
    'description': 'Organic and naturally flavored ethanol spirits',
    'image': 'casual-gin.jpg',
    'cover': 'casual-gin-cover.jpg',
    'link': 'na',
    'ingredients': [
      {
        'name': 'Juniper berries (Juniperus communis)',
        'description': 'fresh juniper',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Juniperus_communis',
      },
      {
        'name': 'Coriander Seed (Coriandrum sativum)',
        'description': '',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Coriander'
      },
      {
        'name': 'Cubeb Berries (Piper cubeba)',
        'description': 'A savory spice mostly grown in Java and Sumatra, it departs volitile oils and camphoraceous flavors, minty and lightly peppery flavor, with notes of pine, eucalyptus and allspice',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Piper_cubeba'
      },
      {
        'name': 'Grains of paradise (Aframomum melegueta)',
        'description': 'A rich peppery seeds depart Caramon like flavors, native to west africa, these particular pods were harvested in Ghana between February and June.',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Aframomum_melegueta'
      },
      {
        'name': 'Cassia bark (Cinnamomum cassia)',
        'description': 'Certified organic shaved Cinnamon bark, the woody musky notes',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Cinnamomum_cassia'
      },
      {
        'name': 'Liquorice root (Glycyrrhiza glabra)',
        'description': 'Glycyrrhiza glabra',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Liquorice'
      },
      {
        'name': 'Angelica root',
        'description': 'Angelica archangelica',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Angelica_archangelica'
      },
      {
        'name': 'Orris root (Iris pallida)',
        'description': 'Purchased from a member owned sustainable co-op, these organic roots add sweet raspberry notes to the gin',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Orris_root'
      },
      {
        'name': 'Lemon Peel (Citrus Limon)',
        'description': 'The lemon peel adds crisp citrus flavors and oils',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Lemon'
      },
      {
        'name': 'Bitter orange peel',
        'description': 'Citrus aurantium',
        'type': 'aromatic',
        'link': 'https://en.wikipedia.org/wiki/Bitter_orange'
      },
    ],
  },
  {
    'id': 'casual-moonshine',
    'name': 'Moonshine',
    'dek': 'Corn Whiskey unoaked',
    'description': 'This unoaked whiskey is made with organic locally sourced corn distilled to perfection ' +
    'using artisanal small batch techniques.',
    'image': 'casual-moonshine.jpg',
    'cover': 'casual-moonshine-cover.jpg',
    'ingredients': [
      { 'name': 'corn', 'description': 'Locally sourced organic corn', 'type': 'fermentable' },
      { 'name': 'barley', 'description': 'barley', 'type': 'fermentable' },
      { 'name': 'rye', 'description': 'rye', 'type': 'fermentable' },
    ],
  },
];

export default products;
