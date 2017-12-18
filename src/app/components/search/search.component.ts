import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  term: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.heroes = this.heroesService.searchHero(params['term']);
    });

  }

}
