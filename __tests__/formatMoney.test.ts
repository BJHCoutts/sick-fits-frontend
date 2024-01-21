import formatMoney from "../src/lib/functions/formatMoney"

describe( 'format Money function', () =>
{
	it( 'works with fractional dollars', () =>
	{
		expect( formatMoney( 1 ) ).toEqual( '$0.01' )
		expect(formatMoney(10)).toEqual('$0.10')
		expect(formatMoney(9)).toEqual('$0.09')
	} )
	it( 'leaves off cents when its whole dollars', () =>
	{
		expect( formatMoney( 200 ) ).toEqual( '$2' )
		expect( formatMoney( 5000 ) ).toEqual( '$50' )
	} )
	it( 'works with whole and fractional dollars', () =>
	{
		expect(formatMoney(140)).toEqual('$1.40')
		expect( formatMoney( 5012 ) ).toEqual( '$50.12' )
		expect( formatMoney( 101 ) ).toEqual( '$1.01' )
		expect( formatMoney( 110 ) ).toEqual( '$1.10' )
	})
})