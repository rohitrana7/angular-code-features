import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  // subject$ = new Subject();

  // ngOnInit() {
  //   this.subject$.next("1");
  //   this.subject$.next("2");
 
  //   this.subject$.subscribe(val => {
  //     console.log(val);
  //   });
 
  //   this.subject$.next("3");
  //   this.subject$.complete();
  // }

  //ex-2
  // subject$ = new Subject();
 
  // observable = new Observable(observer => {
  //   observer.next("first");
  //   observer.next("second");
  //   observer.error("error");
  // });
 
  // ngOnInit() {
  //   this.subject$.subscribe(val => {
  //     console.log(val);
  //   });
 
  //   this.observable.subscribe(this.subject$);
  // }

  //ex-3
  observable$ = new Observable<number>(subscriber => {
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });
 
  subject$ = new Subject();
 
  ngOnInit() {
    this.observable$.subscribe(val => {
      console.log("Obs1 :" + val);
    });
 
    this.observable$.subscribe(val => {
      console.log("Obs2 :" + val);
    });
 
    this.subject$.subscribe(val => {
      console.log("Sub1 " + val);
    });
    this.subject$.subscribe(val => {
      console.log("Sub2 " + val);
    });
 
    this.subject$.next(Math.floor(Math.random() * 200) + 1);
  }

}
