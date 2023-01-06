import { ref, reactive, readonly } from 'vue'

/**
 * PRIVATE state
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
