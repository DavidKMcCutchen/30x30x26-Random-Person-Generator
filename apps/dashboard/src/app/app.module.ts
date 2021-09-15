import { EnvironmentModule } from './../../../../libs/environment/src/lib/environment.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { CoreDataModule } from './../../../../libs/core-data/src/lib/core-data.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PersonsComponent } from './persons/persons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { PersonComponent } from './person/person.component';
import { PersonInfoComponent } from './person/person-info/person-info.component';
import { MaterialModule } from 'libs/material/src/lib/material.module';
import { UiLoginModule } from '@random-person-app/ui-login';
import { PersonsListComponent } from './persons/persons-list/persons-list.component';
import { PersonsDetailsComponent } from './persons/persons-details/persons-details.component';
@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonsDetailsComponent, PersonsListComponent, PersonInfoComponent, PersonComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}