import { ResultFacade } from './../../../../../libs/core-state/src/lib/person/person.facade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { emptyResult, emptyId, Result } from 'libs/api-interfaces/src/lib/api-interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'random-person-app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  allResults$: Observable<Result[]> = this.resultFacade.allResults$;
  selectedResult$: Observable<Result> = this.resultFacade.selectedResults$;

  form: FormGroup;

  constructor(
    private resultFacade: ResultFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.resultFacade.mutations$.subscribe((_) => this.resetResult());
  }

  ngOnInit() {
    this.initForm();
    this.resultFacade.loadResults();
    this.resetResult()

    const resultRouteId = this.route.snapshot.params['id'];

    if (resultRouteId) {
      this.loadResult((resultRouteId))
    }
  }

  viewResult(resultId: string) {
    this.router.navigate(["results", resultId])
  }

  loadResult(resultId: string) {
    this.resultFacade.selectResult(resultId);
    this.resultFacade.loadResult(resultId);
  }

  selectResult(result: Result) {
    this.resultFacade.selectResult(result.id.name)
    this.form.patchValue(result);
  }

  saveResult(result: Result) {
    this.resultFacade.saveResult(result);
  }

  deleteResult(result: Result) {
    this.resultFacade.deleteResult(result);
  }

  resetResult() {
    this.form.reset();
    this.selectResult(emptyResult)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      gender: [''],
      name: {
      title: [''],
      first: [''],
      last: [''],
  },
      location: {
      street: [''],
      city: [''],
      state: [''],
      postcode: [''],
      coordinates: {
      latitude: [''],
      longitude: ['']
    },
      timezone: {
      offset: [''],
      description: ['']
    }
  },
      email: [''],
      login: {
      uuid:    [''],
      username: [''],
      password: [''],
      salt:     [''],
      md5:      [''],
      sha1:     [''],
      sha256:   ['']
  },
      dob: {
      date: [''],
      age: [0]
  },
      registered: {
      date: [''],
      age: [0]
    },
      phone: [''],
      cell: [''],
      id: {
      name: [''],
      value: ['']
  },
      picture: {
      large: [''],
      medium: [''],
      thumbnail: ['']
  },
      nat: ['']
    });
  }
}
