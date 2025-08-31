import { Injectable } from '@angular/core';
import { StorageProvider } from '../provide/storage-provider';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storageProvider: StorageProvider) { }

  registeruser(user: Iuser) {
    this.storageProvider.set('user', JSON.stringify(user));

  }


LoginUser(email: string, password: string): boolean {
   const user: Iuser | null = this.storageProvider.get<Iuser>('user');
  if (!user) {
    return false;
  }
  return user.email === email && user.password === password;
}




}

export interface Iuser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  country: string;



}

