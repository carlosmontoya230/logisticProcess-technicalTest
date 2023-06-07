import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  public activeTab$ = new BehaviorSubject<number>(0);

  setActiveTab(index: number) {
    this.activeTab$.next(index);
  }

  getActiveTab() {
    return this.activeTab$.asObservable();
  }

}
