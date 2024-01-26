// import casual from 'casual';
import { PAGINATION_QUERY } from './graphQL/queries/paginationQuery'
import { TProduct } from './types/TProduct'


// seed it so we get consistent results
// casual.seed( 777 );

export const fakeProduct = {
  // __typename: 'Item',
  id: 'abc123',
  price: 5000,
  // user: null,
  photo: {
    id: 'abc123',
    altText: 'dogs are best',
    image: {
      id: 'abc321',
      publicUrlTransformed: 'dog.jpg',
    },
  },
  name: 'dogs are best',
  description: 'dogs',
}

const fakeItem = ():TProduct => ({
  // __typename: 'Item',
  id: 'abc123',
  price: 5000,
  // user: null,
  photo: {
    id: 'abc123',
    altText: 'dogs are best',
    image: {
      id: 'abc321',
      publicUrlTransformed: 'dog.jpg',
    },
  },
  name: 'dogs are best',
  description: 'dogs',
} );

// const fakeUser = ( overrides: { overrides:unknown } ) => ({
//   __typename: 'User',
//   id: '4234',
//   name: casual.name,
//   email: casual.email,
//   permissions: ['ADMIN'],
//   orders: [],
//   cart: [],
//   ...overrides,
// });

// const fakeOrderItem = () => ({
//   __typename: 'OrderItem',
//   id: casual.uuid,
//   image: {
//     image: `${casual.word}.jpg`,
//   },
//   name: casual.words(),
//   price: 4234,
//   quantity: 1,
//   description: casual.words(),
// });

// const fakeOrder = () => ({
//   __typename: 'Order',
//   id: 'ord123',
//   charge: 'ch_123',
//   total: 40000,
//   items: [fakeOrderItem(), fakeOrderItem()],
//   createdAt: '2022-12-11T20:16:13.797Z',
//   user: fakeUser(),
// });

// const fakeCartItem = (overrides) => ({
//   __typename: 'CartItem',
//   id: 'omg123',
//   quantity: 3,
//   product: fakeItem(),
//   user: fakeUser(),
//   ...overrides,
// });

// // Fake LocalStorage
// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key] || null;
//   }

//   setItem(key, value) {
//     this.store[key] = value.toString();
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// }

// function makePaginationMocksFor(length:number) {
//   return [
//     {
//       request: { query: PAGINATION_QUERY },
//       result: {
//         data: {
//           _allProductsMeta: {
//             count: length,
//           },
//           itemsConnection: {
//             __typename: 'aggregate',
//             aggregate: {
//               count: length,
//               __typename: 'count',
//             },
//           },
//         },
//       },
//     },
//   ];
// }

export {
  // makePaginationMocksFor,
  // LocalStorageMock,
  fakeItem,
  // fakeUser,
  // fakeCartItem,
  // fakeOrder,
  // fakeOrderItem,
};
