import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(private translationService: TranslocoService, public service:ApplicationService) { }

  ngOnInit() {
    this.translationService.selectTranslate('app.title').subscribe((res: string) => {
      this.title = res;
    });
  }
  toggleFooter() {
    console.log('toggleFooter');
    this.service.showFooter = !this.service.showFooter;
  }
}
