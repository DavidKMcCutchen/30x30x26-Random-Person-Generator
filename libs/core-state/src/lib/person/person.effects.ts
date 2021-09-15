import { PersonsService } from './../../../../core-data/src/lib/services/persons.service';
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as ResultActions from './person.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Result } from "libs/api-interfaces/src/lib/api-interfaces";


@Injectable()
export class ResultEffects{
    loadResult$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ResultActions.loadResult),
            fetch({
                run: (action) =>
                    this.resultsService
                        .getOne(action.resultId)
                        .pipe(map((result: Result) => ResultActions.loadResultSuccess({ result }))),
                    onError: (action, error) => ResultActions.loadResultFailed({ error })    
            })
        ));
    loadResults$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ResultActions.loadResults),
            fetch({
                run: () =>
                    this.resultsService
                    .getAll()
                    .pipe(
                        map((results: Result[]) => ResultActions.loadResultsSuccess({ results }))
                    ),
                onError: (action, error) => ResultActions.loadResultsFailed({ error })    
            })
        ));
    //     createResult$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ResultActions.createResult),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.resultsService
    //                     .create(action.result)
    //                     .pipe(map((result: Result) => ResultActions.createResultSuccess({ result }))),
    //                 onError: (action, error) => ResultActions.createResultFailed({ error })    
    //         })
    // ));

    // updateResult$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ResultActions.updateResult),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.resultsService
    //                     .update(action.result)
    //                     .pipe(map((result: Result) => ResultActions.updateResultSuccess({ result}))),
    //                 onError: (action, error) => ResultActions.updateResultFailed({ error })    
    //         })
    // ));

    // deleteResult$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ResultActions.deleteResult),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.resultsService
    //                     .delete(action.result)
    //                     .pipe(
    //                         map(() => ResultActions.deleteResultSuccess({ result: action.result }))
    //                     ),
    //                 onError: (action, error) => ResultActions.deleteResultFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private resultsService: PersonsService
    ) {}    
}