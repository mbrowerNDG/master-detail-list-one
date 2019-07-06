import { Character } from './data-interface';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-detail';
  public selectedCharacter: Character;

  childCharacterClicked(character: Character){
    this.selectedCharacter = character;
    console.log('from parent', character);
  }
}
