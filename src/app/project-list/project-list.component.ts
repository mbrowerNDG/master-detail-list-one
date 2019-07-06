import { Character } from './../data-interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { STARWARS } from '../data';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
 characters = STARWARS;
 @Output() characterClicked = new EventEmitter<Character>();
 constructor() { }
 onClick(character: Character): void {
  this.characterClicked.emit(character);
  console.log('clicked', character);
}
  ngOnInit() {

  }

}
