import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent {
  changeLang(lang: string | {id: string, label: string}) {
    const langId = typeof lang === 'string' ? lang : lang.id;
    this.translationService.setActiveLang(langId);
  }

  langString(lang: string | {id: string, label: string}): string {
    return typeof lang === 'string'? lang: lang.id;
  }

  availableLangs: any[] = [];

  constructor(private translationService: TranslocoService) { }

  ngOnInit() {
    this.availableLangs = this.translationService.getAvailableLangs();
    console.log(this.availableLangs);
  }

}
