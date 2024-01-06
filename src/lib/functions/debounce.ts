export function debounce (functionToRun:Function, timer:number)
{
	let debounceTimer: NodeJS.Timeout
	
	clearTimeout( debounceTimer )
		
	debounceTimer = setTimeout( () => functionToRun, timer)
	
}