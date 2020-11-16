import test from 'ava'

import { generateRandomName } from './index.js'

test('Returns a string', async t => {
	const name = await generateRandomName()

	t.is(typeof name, 'string')
})

test('Returns two space-separated words', async t => {
	const name = await generateRandomName()

	t.is(name.split(' ').length, 2)
})

test('Returns alliterated words', async t => {
	const name = await generateRandomName()
	const [adjective, animal] = name.split(' ')

	t.is(adjective[0], animal[0])
})
