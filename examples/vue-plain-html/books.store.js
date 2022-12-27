import { ref, reactive } from 'vue'

// books store
// state

// getters
export const books = reactive([])
export const isBusy = ref(false)

// actions
export async function loadBooks() {
  isBusy.value = true
  // fake http payload
  const response = await Promise.resolve([
    {
      'key': 1,
      'name': 'book 1'
    },
    {
      'key': 2,
      'name': 'book 2'
    }
  ])
  books.splice(0, response.length, ...response)
}
