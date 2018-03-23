import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes = 'Visual Studio Code';
  name = 'Zaid Bin Saeed';

  ngOnInit() {
  }

}
