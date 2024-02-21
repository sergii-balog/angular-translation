import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  public language: string = 'en';
  public counter: number = 0;
  public showFooter: boolean = false;

  constructor() { }
}
