import { Injectable } from '@angular/core';  
import { from, Observable } from 'rxjs';  
import { catchError } from 'rxjs/operators';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class NgxDatatableService {  
  hero_pages;  
  total_count;
  
  constructor() {  
    this.hero_pages = [{  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF',  
      'order_number': 1  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF1',  
      'order_number': 2  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF2',  
      'order_number': 3  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF3',  
      'order_number': 4  
    }];  
  
    this.total_count = this.hero_pages.length;  
  }  
}  