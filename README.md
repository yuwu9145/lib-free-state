# library free state

Why do you use a state management library if you can easily write it your own?

## :thinking: What does state management libraries do? 
State libraries (vuex for vue 2, pinia for vue 3, NGRX for Angular etc.) help you to achieve:
- SINGLE SOURCE OF TRUTH: singleton state object that is shared across components
- IMMUTABILITY: immutable or ready-only declarative mapping of the state exposed to components (getters & selectors)
- MUTABILITY: expose actions allowing state to be internally mutable in response to certain events
- REACTIVITY: immutable getters/selectors must be reactive

## :worried: State management libraries are NOT perfect
- They have learning curves
- Some of them have too much boilerplate that overkills a simple feature (e.g. redux & NGRX)

## :heart_eyes: Write your own state management logic using built-in technologies/APIs 
### Vue 3 (state file using plain composition api)

In this the sample file:
- SINGLE SOURCE OF TRUTH: Its state is singleton because it is used in components as `import { books, loadBooks } from './books.store'`
- IMMUTABILITY: `books` & `isBusy` are exposed as readonly
- MUTABILITY: `state.books` & `state.isBusy` are internally mutable
- REACTIVITY: `books` & `isBusy` are reactive

Feel free to copy this sample code as a template to try to construct your own state file :)

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
