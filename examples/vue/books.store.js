import { ref, reactive } from 'vue'

// books store
const books = reactive([])
const isBusy = ref(false)

async function loadBooks() {
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

export default function () {
 return {
    loadBooks,
    books,
    isBusy
  }
}
