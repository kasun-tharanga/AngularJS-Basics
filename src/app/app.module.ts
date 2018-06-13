import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { ActivitiesComponent } from './components/activities/activities.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'activity', component: ActivitiesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppHighlightDirective,
    DashboardComponentComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
