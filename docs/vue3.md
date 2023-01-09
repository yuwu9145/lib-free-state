# Vue 3
## Build state store by using Composition api
- **SINGLE SOURCE OF TRUTH**: achieved by importing & reusing the same state object
- **IMMUTABILITY**: achieved by using [composition API - readonly()](https://vuejs.org/api/reactivity-core.html#readonly) - avoid being arbitrarily mutated by components
- **MUTABILITY**: reactive proxy object can be changed internally
- **REACTIVITY**: [Vue reactivity engine](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) is reactive

## Sample template with explaination
In this the sample file:
- **SINGLE SOURCE OF TRUTH**: `state` object is declared by using `const`, which garantees it is the same object being shared across
- **IMMUTABILITY**: `books` & `isBusy` are exposed as readonly, which means neither `state.books` nor `state.isBusy` can be modified by components
- **MUTABILITY**: `state.books` & `state.isBusy` can be modified internally
- **REACTIVITY**: `readonly(state.books)` & `readonly(ref(state.isBusy))` are reactive

```ts
import { ref, reactive, readonly } from 'vue'

/**
 * PRIVATE state (internally mutable)
 */
const state = reactive({
  books: [], // array
  isBusy: false // primitive
})

/**
 * PUBlIC getters (must be readonly)
 */
export const books = readonly(state.books)
export const isBusy = readonly(ref(state.isBusy))

/**
 * PUBLIC actions
 */
export async function loadBooks() {
  state.isBusy = true
  const booksResponse = await Promise.resolve([
    {
      'key': 1,
      'name': 'book 1'
    },
    {
      'key': 2,
      'name': 'book 2'
    }
  ]) as any[]
  
  state.isBusy = false
  // @ts-ignore
  state.books.splice(0, booksResponse.length, ...booksResponse)
}

```



Feel free to copy this sample code as a template to try to construct your own state file :)
