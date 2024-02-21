import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

    constructor(private service:ApplicationService) { }

    ngOnInit() {
    }

increment() {
this.service.counter++;
}

}
