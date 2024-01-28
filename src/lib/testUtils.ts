import casual from 'casual'
import { PAGINATION_QUERY } from './graphQL/queries/paginationQuery'
import { TProduct } from './types/TProduct'
import { TCartItem } from './types/TCartItem'
import { TUser } from './types/TUser'

// seed it so we get consistent results
casual.seed(777)

export const fakeItem = (): TProduct => ({
	__typename: 'Item',
	id: 'abc123',
	price: 5000,
	user: null,
	photo: {
		id: 'abc123',
		altText: 'dogs are best',
		image: {
			id: 'abc123',
			publicUrlTransformed: 'dog.jpg',
		},
	},
	name: 'dogs are best',
	description: 'dogs',
	status: 'AVAILABLE',
})

export const fakeUser = (overrides: {}): TUser => ({
	__typename: 'User',
	id: '4234',
	name: casual.name,
	email: casual.email,
	permissions: ['ADMIN'],
	orders: [],
	cart: [],
	...overrides,
})

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

export const fakeCartItem = (overrides: {}): TCartItem => ({
	__typename: 'CartItem',
	id: 'omg123',
	quantity: 4,
	product: fakeItem(),
	user: fakeUser({}),
	...overrides,
})

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

export function makePaginationMocksFor(length: number) {
	return [
		{
			request: { query: PAGINATION_QUERY },
			result: {
				data: {
					_allProductsMeta: {
						count: length,
					},
					itemsConnection: {
						__typename: 'aggregate',
						aggregate: {
							count: length,
							__typename: 'count',
						},
					},
				},
			},
		},
	]
}

// export
// makePaginationMocksFor,
// LocalStorageMock,
// fakeItem,
// fakeUser,
// fakeCartItem,
// fakeOrder,
// fakeOrderItem,
