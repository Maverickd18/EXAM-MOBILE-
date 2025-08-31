import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  encryptPassword(password: string): string {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }

  comparePassword(password: string, hash: string): boolean {
    const encrypted = this.encryptPassword(password);
    return encrypted === hash;
  }
}