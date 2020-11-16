# randimal

A random animal name generator, forked from
[`random-animal-name-generator`](https://github.com/adzialocha/random-animal-name-generator).

```js
import { generateRandomName } from 'randimal'

// In some async context...
const name = await generateRandomName()

console.log(name) // Geological Gnu
```

## Differences

`random-animal-name-generator` hasn't been updated in awhile, so here's a list
of adjustments:

### Async by default

The word lists are absolutely massive, with previously upwards of 1700 animals
and nearing 9000 adjectives. Loading these files is less of a problem in Node,
but in the browser, we don't want to wait on these files to load with the main
bundle.

To combat this, the animals list and adjectives lists are loaded via dynamic
import, so you can rely on your bundler's chunking features to load the lists
when their necessary. To support this, **`generateRandomName` is now an async
function.**

In the future, I may consider a synchronous entry, but for now, I think this is
an improvement.

### Word lists are pre-optimized

Whenever `random-animal-name-generator` is included in your application, it
sorts the animal and adjective word lists into new objects keyed by their
starting letter. This is deterministic—the data never changes, and so we don't
need to rearrange it every time! So, the word lists (moved into the `data`
folder and converted to JS modules) are now sorted by first letter by default.

### Other stuff

- Removed (probably) all of the animal names that consist of multiple words. The
  smushed-together animal names were confusing to read.
- Removed some made-up animal names... Not really sure where the data came from,
  but I performed Google searches on a number of them and came up with nothing.
  So, I took them out.
- Capitalized all words on both word lists, since they're names.

## Untouched Stuff

While the adjectives have been capitalized, there are still quite a number of...
creative words in the list. It seems like it came from the Scribblenauts wiki,
which is cool, but it'll take some effort to make sure there are only
dictionary-acknowledged adjectives in this project.
