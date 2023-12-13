import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DoswiadczenieComponent } from './components/doswiadczenie/doswiadczenie.component';
import { OmnieComponent } from './components/omnie/omnie.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'doswiadczenie',
    component: DoswiadczenieComponent,
  },
  {
    path: 'omnie',
    component: OmnieComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export { Routes };

