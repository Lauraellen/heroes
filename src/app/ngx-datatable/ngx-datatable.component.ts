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

  offset: number = 0;
  name: string;
  ngxDatatablePagination: NgxDatatablePagination;
  content: any;

  constructor(
    @Inject(HeroService) private heroService,

  ) { 
    this.resetPagination();
    this.content = [];

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
    //this.searchPage();
   // console.log(this.ngxDatatablePagination.pageNumber)

    if ( this.ngxDatatablePagination.pageNumber !== 0) {
      this.offset = this.offset + 30;
      this.ngxDatatablePagination.pageSize = this.ngxDatatablePagination.pageSize*3;
      this.searchPage();
    }
  }

  searchPage(): void {
    this.heroService.getHeroes(this.offset, this.ngxDatatablePagination.pageSize)
      .subscribe(data => {
       // console.log(data.data);
        this.content.push(...data.data.results);
        
        this.ngxDatatablePagination.rows = [... this.content];
        this.ngxDatatablePagination.totalCount = data.data.count;
      }, (error) => {
        'Erro, tabela vazia';
      });

      // console.log(this.content)
  }


}  


