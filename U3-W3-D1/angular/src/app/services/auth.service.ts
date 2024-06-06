import { Injectable } from '@angular/core';
import { iUser } from '../interfaces/user';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<iUser>;
  public currentUser: Observable<iUser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<iUser>(this.getStoredUser());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private getStoredUser(): iUser {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      return JSON.parse(storedUser);
    } else {
      return { id: null, username: '', token: '' };
    }
  }

  public get currentUserValue(): iUser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<iUser> {
    const fakeUser: iUser = {
      id: 1,
      username: 'usarname',
      token: 'fake-jwt-token',
    };
    localStorage.setItem('currentUser', JSON.stringify(fakeUser));
    this.currentUserSubject.next(fakeUser);
    return of(fakeUser);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({ id: null, username: '', token: '' });
  }
}
