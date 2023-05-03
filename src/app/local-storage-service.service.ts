import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  // stoquer les infos
  setItem(key: string, value: any): void {
    if (value != null) {
      try {
        localStorage.setItem(key, JSON.stringify(value));  // si value différent de null on place ds un tableau
      } catch (err) {
        console.log('impossible de sauver les infos')
      }
    }
  }
  //récuperer des infos
  getItem(key: string): any {
    const storeValue = localStorage.getItem(key);
    if (storeValue) {
      return JSON.parse(storeValue);
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  // supprimer toutes les info
  clear():void {
    localStorage.clear();
  }

  hasKey(key: string): boolean{
    return localStorage.getItem(key) != null
  }

}
