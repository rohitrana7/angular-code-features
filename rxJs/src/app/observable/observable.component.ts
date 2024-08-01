import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{
  agents$!: Observable<number>;

  ordersArr = ['A', 'B', 'C', 'D'];
  orders$: Observable<string> = from(this.ordersArr);

  ngOnInit(): void {
    this.agents$ = new Observable((observer) => {
        // try{
        //   observer.next('Ram');
        //   observer.next('Lakhan');
        //   observer.next('Sita');
        // } catch(err){
        //   observer.error(err);
        // }
        observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.error('count exceeds 3');
        
      }
    )

    this.agents$.subscribe(data => console.log(data), err => console.log(err));
  }

}
