import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: String[] = ['Hulk', 'Thor', 'Ant man', 'Roket', 'Grut'];

  public deletedHero?: String;

  removeLastHero(): void{

    this.deletedHero = this.heroNames.pop();
  }

}
