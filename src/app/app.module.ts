import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DoswiadczenieComponent } from './components/doswiadczenie/doswiadczenie.component';
import { SkileComponent } from './components/skile/skile.component';
import { FooterComponent } from './components/footer/footer.component';
import { OmnieComponent } from './components/omnie/omnie.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DoswiadczenieComponent,
    SkileComponent,
    FooterComponent,
    OmnieComponent,
    PortfolioComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
