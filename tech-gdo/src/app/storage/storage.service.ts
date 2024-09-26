import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from './storage.model'; 

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageSubject = new BehaviorSubject<Storage[]>([]);
  public element = this.storageSubject.asObservable();

  constructor() { 
    const initialElement: Storage[] = [
      {
        id: '1',
        title: 'Cimento',
        status: 0,
        updatedAt: new Date(),
        assignee: 'João',
      },
    ];
    this.storageSubject.next(initialElement);
  }
   // Método para atualizar os elementos
   updateElement(newElement: Storage[]) {
    this.storageSubject.next(newElement);
  }

  // Método para adicionar um novo elemento
  addElement(element: Storage) {
    const currentElement = this.storageSubject.getValue();
    this.storageSubject.next([...currentElement, element]);
  }
}

