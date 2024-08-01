import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  obs = new Observable( observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
  }).pipe(
    tap(data => console.log('tap', data)),
    filter((data:any) => data > 1),
    tap(data => console.log('filter', data)),
    map(data => { return data as number*2}),
    tap(data => console.log('final', data)),
  );

  data:number[] = [];
  obs_switchMap = of(1,2,3,4);

  //switchmap
  srcObservable= of(1,2,3,4)
  innerObservable= of('A','B','C','D');

  ngOnInit() {
  //   this.obs.subscribe( val =>{
  //     this.data.push(val);
  //     console.log('data', this.data);
  //   })

  //   this.obs_switchMap.pipe(
  //     switchMap( val => {
  //       return of(val*2)  //Returning observable
  //     })
  //  )
  //  .subscribe(ret=> {
  //    console.log('Recd from switchMap : ' + ret);
  //   })

    //switchmap
  this.srcObservable.pipe(
    mergeMap(val => this.innerObservable
    )
  ).subscribe(data => console.log(data));
  }

}
