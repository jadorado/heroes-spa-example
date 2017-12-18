import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private routerService: Router) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  viewHero(index: number) {
    this.routerService.navigate(['/hero', index]);
  }

}
