# Library-Free State Management


## Modern frameworks have built-in technologies allowing to write state management critical features by your own


## :thinking: What does state management libraries do? 
State libraries (vuex for vue 2, pinia for vue 3, NGRX for Angular etc.) help you to achieve:
- **SINGLE SOURCE OF TRUTH**: singleton state object that is shared across components
- **IMMUTABILITY**: immutable or ready-only declarative mapping of the state exposed to components (getters & selectors)
- **MUTABILITY**: expose actions allowing state to be internally mutable in response to certain events
- **REACTIVITY**: immutable getters/selectors must be reactive


<img width="960" alt="state-machine" src="https://user-images.githubusercontent.com/5698884/211715788-c2f0603f-aa42-40fa-926c-d92e59986ab7.png">

## :worried: State management libraries are NOT perfect
- They have learning curves
- Some of them have too much boilerplate that overkills a simple feature (e.g. redux & NGRX)
