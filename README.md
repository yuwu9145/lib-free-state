# library free state

Using shared state is imperative when writing large-scale frontend applications. There are a variety of state libraries (vuex for vue 2, pinia for vue 3, NGRX for Angular etc.) that help you to achieve:
- maintain singleton state object that is shared across components
- state object must be immutable or ready-only in places consuming it
- state object must also be internally mutable to allow public actions to change state
- state getters/selectors must be reactive

However, these libraries have common drawbacks:
- they have learning curves
- too much boilerplate that overkills a simple feature (e.g. redux & NGRX)

Fortunately, most frontend frameworks' built-in technologies enabling above state features from scratch.

## Vue 3 (taking advantage of composition api)

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
