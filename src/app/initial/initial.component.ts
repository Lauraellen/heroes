import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(
    @Inject(HeroService) private heroService,
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
    /*this.heroService.getHeroes().subscribe((data) => {
      console.log(data);
    });*/
  }


  choiceHeroes(): void {
    console.log('ta funcionando')
    this.router.navigate(['/ngx-datatable']);
  }
  

}
