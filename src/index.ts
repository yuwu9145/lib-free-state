import { of } from 'rxjs'

export function test(): void {
  of(2).subscribe(s => console.log(s))
}