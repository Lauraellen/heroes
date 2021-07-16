import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { NgxDatatablePagination } from 'src/app/ngx-datatable/ngx-datatable.pagination';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {

  element: HTMLImageElement;
  offset: number = 0;
  name: string;
  ngxDatatablePagination: NgxDatatablePagination;
  content: any;
  filter: any;
  nameComics: any;
  ColumnMode: any;
  columns = []
  selected = [];
  statusForm: number;
  heroe: any;
  comics: any;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    @Inject(HeroService) private heroService,

  ) { 
    this.resetPagination();
    this.heroe = [];
    this.content = [];
    this.filter = [];
    this.nameComics = [];
    this.ColumnMode = ColumnMode;
    this.columns = [
      {
        prop: 'selected',
        name: '',
        sortable: false,
        canAutoResize: false,
        draggable: false,
        resizable: false,
        headerCheckboxable: false,
        checkboxable: true,
        width: 30
      },
      { prop: 'id' },
      { prop: 'name' },
    ]

  }

  resetPagination(): void {
    delete this.ngxDatatablePagination;
    this.ngxDatatablePagination = new NgxDatatablePagination();
  }

  
  ngOnInit() {    
    this.searchPage();
  }

  setPage(pageInfo) {
    this.ngxDatatablePagination.pageSize = pageInfo.pageSize;
    this.ngxDatatablePagination.pageNumber = pageInfo.offset;

    if ( this.ngxDatatablePagination.pageNumber !== 0) {
      this.offset = this.offset + 100;
      this.ngxDatatablePagination.pageSize = this.ngxDatatablePagination.pageSize*10;
      this.searchPage();
    }
  }

  searchPage(): void {
    
    this.statusForm = 1;
    this.heroService.getHeroes(this.offset, this.ngxDatatablePagination.pageSize)
      .subscribe(data => {
        this.content.push(...data.data.results);
        this.filter = [... this.content];
        this.ngxDatatablePagination.rows = [... this.content];
        this.ngxDatatablePagination.totalCount = data.data.count;
      }, (error) => {
        'Erro, tabela vazia';
      });

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    const filter = this.filter.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.ngxDatatablePagination.rows = filter;
    this.table.offset = 0;
  }

  onSelect(row) {
    if (this.selected.length === 5) {
      this.columns = [
        {
          prop: 'selected',
          name: '',
          sortable: false,
          canAutoResize: false,
          draggable: false,
          resizable: false,
          headerCheckboxable: false,
          checkboxable: false,
          width: 30,
        
        },
        { prop: 'id' },
        { prop: 'name' },
      ]
    }
  }

  remove(): void {
    this.selected.pop();
    this.columns = [
      {
        prop: 'selected',
        name: '',
        sortable: false,
        canAutoResize: false,
        draggable: false,
        resizable: false,
        headerCheckboxable: false,
        checkboxable: true,
        width: 30,
      
      },
      { prop: 'id' },
      { prop: 'name' },
    ]
  }

  add(): void {
    this.statusForm = 2;

  }

  detailsHeroes(): void {
    this.statusForm = 3;
  }
}  


