import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NluComponent } from './components/nlu/nlu.component';
import { VrComponent } from './components/vr/vr.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NluComponent,
    VrComponent,
    FooterComponent,
    DndDirective
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
