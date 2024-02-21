import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {


  constructor(public service: ApplicationService) { }

  ngOnInit() {
  }

}
