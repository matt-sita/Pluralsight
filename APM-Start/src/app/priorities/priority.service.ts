import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IPriority } from './priority';

@Injectable({
  providedIn: 'root'
})

export class PriorityService {
  private priorityUrl = 'http://dev-paging4:22222/PaxComApi/api/priority';

  constructor(private https: HttpClient) { }

  getPriorities(): Observable<IPriority[]> {
    return this.https
      .get<IPriority[]>(this.priorityUrl)
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError))
      ;
  }

  getPriority(id: number): Observable<IPriority | undefined> {
    return this.getPriorities().pipe(
      map((priorities: IPriority[]) => priorities.find(p => p.id === id))
    );
  }

  //Acutal application would do something on the server
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return [];//this.NoProducts;//throwError(errorMessage);
  }
}
