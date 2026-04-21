import { Component } from '@angular/core';
import { UserItem } from '../user-item/user-item';

@Component({
  selector: 'app-user-list',
  imports: [UserItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  names: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { //ti permette di riempire le variabili
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; //Riempiamo il vettore
  }
}
