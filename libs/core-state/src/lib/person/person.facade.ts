import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ResultActions from './person.actions';
import * as ResultSelectors from './person.selectors';
import * as fromResults from './person.reducer';
import { Result } from "libs/api-interfaces/src/lib/api-interfaces";


@Injectable({
    providedIn: 'root'
})

export class ResultFacade {
    allResults$ = this.store.pipe(
        map((state) => ResultSelectors.getAllResults(state)),
    )
    selectedResults$ = this.store.pipe(select(ResultSelectors.getSelectedResult));
    loaded$ = this.store.pipe(select(ResultSelectors.getResultsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === ResultActions.createResult({} as any) .type ||
        action.type === ResultActions.updateResult({} as any) .type ||
        action.type === ResultActions.deleteResult({} as any) .type 
        ))

        selectResult(resultId: string) {
            this.dispatch(ResultActions.selectResult({ resultId }));
        };

        loadResults() {
            this.dispatch(ResultActions.loadResults())
        };

        loadResult(resultId: string) {
            this.dispatch(ResultActions.loadResult({ resultId }))
        };

        saveResult(result: Result) {
            result.id ? this.updateResult(result) : this.createResult(result)
        };

        createResult(result: Result) {
            this.dispatch(ResultActions.createResult({ result }))
        };

        updateResult(result: Result) {
            this.dispatch(ResultActions.updateResult({ result }))
        };

        deleteResult(result: Result) {
            this.dispatch(ResultActions.deleteResult({ result }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromResults.ResultPartialState>,
            private actions$: ActionsSubject
        ) {}
}