export function debounce (callback:Function, timer:number)
{
	let debounceTimer: NodeJS.Timeout
	
	clearTimeout( debounceTimer )
		
	debounceTimer = setTimeout(callback, timer)
	
}