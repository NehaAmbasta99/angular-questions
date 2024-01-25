import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {UserInterface} from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers():Observable<UserInterface[]>{
    return of(
      [{'name':'Neha','id':1},
      {'name':'Naveen','id':2}]
    )
  }
}
