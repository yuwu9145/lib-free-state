export function createGetter<T>(state: any, prop: any): T {
  return state[prop]
}

export function updateState(state: any, prop: any, value: any): void {
  state = {
    ...state,
    [prop]: value
  } 
}
