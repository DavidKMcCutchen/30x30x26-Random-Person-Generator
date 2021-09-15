import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSON_ENVIRONMENT } from './person.token';
import { PersonEnvironment } from "./person.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PersonEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PERSON_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
