import Head from 'next/head'
import SPagination from '../../components/styles/SPagination'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { PAGINATION_QUERY } from '../../lib/graphQL/queries/paginationQuery'
import DisplayError from '../../components/ErrorMessage'
import { perPage } from '../../config'

export default function Pagination({ page }) {
	const { error, loading, data } = useQuery(PAGINATION_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />

	const count = data?._allProductsMeta?.count

	const pageCount = Math.ceil(count / perPage)

	return (
		<SPagination>
			<Head>
				<title>
					{' '}
					Sick Fits - Page {page} of {}
				</title>
			</Head>
			<Link href={`/products/${page - 1}`} aria-disabled={page <= 1}>
				◀️ Prev
			</Link>
			<p>
				Page {page} of {pageCount}
			</p>
			<p>{count} Items Total</p>
			<Link href={`/Products/${page + 1}]`} aria-disabled={page === pageCount}>
				Next ▶️
			</Link>
		</SPagination>
	)
}
