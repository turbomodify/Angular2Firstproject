import { Injectable } from '@angular/core';
import {PAGES} from './mock-pages';

@Injectable()
export class PageService {

  getPage(){
    return PAGES;
      
    
  }

}
