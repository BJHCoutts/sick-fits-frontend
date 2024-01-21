import formatMoney from "../src/lib/functions/formatMoney"

describe( 'format Money function', () =>
{
	it( 'works with fractional dollars', () =>
	{
		expect( formatMoney( 1 ) ).toEqual( '$0.01' )
		expect(formatMoney(10)).toEqual('$0.10')
	})
})