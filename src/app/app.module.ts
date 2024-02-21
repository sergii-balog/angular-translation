import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LangSelectorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
