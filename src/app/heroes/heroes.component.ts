import { Component, Inject, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'windstorm'
  constructor(
    @Inject(HeroService) private heroService
  ) { 
    
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data) => {
      console.log(data);
    });
  }

}
