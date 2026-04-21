import { Component, signal } from '@angular/core';
import { HelloWord } from './hello-word/hello-word';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [HelloWord, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('progetto');
}
