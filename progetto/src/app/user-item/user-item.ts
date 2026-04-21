import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  @Input() name!: string; //il punto esclamativo definisce la variabile 
}
