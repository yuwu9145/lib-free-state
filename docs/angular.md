# Angular (use plain rxjs)

- SINGLE SOURCE OF TRUTH: It is singleton because it is `@Injectable({ providedIn: 'root' })`
- IMMUTABILITY: `books$` emit readonly freezed object `Object.freeze(state.books)` & `isBusy$` emits plain privimitive boolean
- MUTABILITY: `state.books` & `state.isBusy` are internally mutable via calling `updateState(...)`
- REACTIVITY: `books$` & `isBusy$` are rxjs observables which emit latest changes


```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface BookStoreState {
  books: { id: number; name: string }[]; // array
  isBusy: false; // primitive
}

const defaultState: BookStoreState = {
  books: [], // array
  isBusy: false, // primitive
};

let _state = defaultState;

@Injectable({ providedIn: 'root' })
export class BookStoreFacade {
  private store = new BehaviorSubject<BookStoreState>(defaultState);
  private state$: Observable<BookStoreState> = this.store.asObservable();

  /**
   * PUBlIC getters/selectors (must be readonly)
   */
  books$ = this.state$.pipe(
    map((state) => Object.freeze(state.books)), // Use Object.freeze to make emit object completely readonly
    distinctUntilChanged()
  );

  isBusy$ = this.state$.pipe(
    map((state) => state.isBusy),
    distinctUntilChanged()
  );

  /**
   * PUBLIC actions
   */
  loadBooks() {
    this.updateState({
      ..._state,
      isBusy: true,
    });
    from(
      Promise.resolve([
        {
          id: 1,
          name: 'book 1',
        },
        {
          id: 2,
          name: 'book 2',
        },
      ])
    ).subscribe((books) => {
      this.updateState({
        ..._state,
        books,
        isBusy: false,
      });
    });
  }

  private updateState(state) {
    this.store.next((_state = state));
  }
}

```
