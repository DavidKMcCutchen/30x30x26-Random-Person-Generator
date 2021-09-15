import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from 'libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'random-person-app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent {
  @Input() results: Result[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() resultViewed = new EventEmitter();
}
