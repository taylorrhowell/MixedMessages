function getRandomWord(wordCollection) {
	return wordCollection[Math.floor(Math.random() * wordCollection.length)]
}

export async function generateRandomName() {
	const [{ default: adjectives }, { default: animals }] = await Promise.all([
		import('./data/adjectives.js'),
		import('./data/animals.js')
	])

	const letters = Object.keys(animals)
	const randomLetter = letters[Math.floor(Math.random() * letters.length)]

	return `${getRandomWord(adjectives[randomLetter])} ${getRandomWord(
		animals[randomLetter]
	)}`
}
