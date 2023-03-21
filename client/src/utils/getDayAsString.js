export default function getDayString(date) {
	const today = new Date()
	let nextDayString = new Date()
	nextDayString.setDate(today.getDate() + date)

	nextDayString = nextDayString.toLocaleString('en-us', { weekday: 'short' })

	return nextDayString
}
