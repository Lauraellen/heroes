import { Component, Inject, OnInit } from '@angular/core';
import { NgxDatatableService} from 'src/app/ngx-datatable/ngx-datatable.service';
import { HeroService } from '../hero.service';
import { NgxDatatablePagination } from 'src/app/ngx-datatable/ngx-datatable.pagination';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {

  name: any;
  ngxDatatablePagination: NgxDatatablePagination;
  

  constructor(
    @Inject(HeroService) private heroService,

  ) { 
    this.resetPagination();

  }

  resetPagination(): void {
    delete this.ngxDatatablePagination;
    this.ngxDatatablePagination = new NgxDatatablePagination();
  }

  
  ngOnInit() {    
    //this.getAllHeroList();
   this.searchPage();
  }

  setPage(pageInfo) {
    this.ngxDatatablePagination.pageSize = pageInfo.pageSize;
    this.ngxDatatablePagination.pageNumber = pageInfo.offset;
    this.searchPage();
  }

  searchPage(): void {
    this.heroService.getHeroes(this.ngxDatatablePagination.pageNumber, this.ngxDatatablePagination.pageSize)
      .subscribe(data => {
        console.log(data);
        this.ngxDatatablePagination.rows = [... data.data.results];
        this.ngxDatatablePagination.totalCount = data.headers.get('X-Total-Count');
      }, (error) => {
        'Erro, tabela vazia';
      });
  }

}  


