import { ActionReducerMap } from "@ngrx/store";
import * as fromResults from './person/person.reducer';

export interface AppState {
    [fromResults.RESULT_FEATURE_KEY]: fromResults.ResultState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromResults.RESULT_FEATURE_KEY]: fromResults.resultReducer
};