<script setup>
import { reactive } from 'vue'
import { books, loadBooks } from './books.store'

loadBooks()
      
setTimeout(() => {
  books.splice(2, 3, {
    'key': 3,
    'name': 'book 3'
  })
}, 2000)

const state = reactive({ 
  books
})

</script>

<template>
  <div
    v-for="book in state.books"
    :key="book.key"
  >
    {{ book.name }}
  </div>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
