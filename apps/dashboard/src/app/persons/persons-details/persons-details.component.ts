import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Result } from 'libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'random-person-app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.scss']
})
export class PersonsDetailsComponent {
  currentResult: Result;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set result(value) {
    if (value) this.originalTitle = value.name;
    this.currentResult = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
