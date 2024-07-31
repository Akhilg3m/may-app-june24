import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create
  public countSub$: BehaviorSubject<number> =
    new BehaviorSubject(0);


  // set
  setCount(value: any) {
    this.countSub$.next(value);
  }

  // get
  getCount() {
    return this.countSub$;
  }


}
