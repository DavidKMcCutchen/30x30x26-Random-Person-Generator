import { Result } from './../../../../api-interfaces/src/lib/api-interfaces';
import { createAction, props } from "@ngrx/store";

// Select Entity

export const selectResult = createAction(
    '[RESULT] Select Result',
    props<{ resultId: string }>()
);

// Load all Entities

export const loadResults = createAction(
    '[RESULT] Load Results'
);

export const loadResultsSuccess = createAction(
    '[RESULT] Load Results Success',
    props<{ results: Result[]}>()
);

export const loadResultsFailed = createAction(
    '[RESULT] Load Results Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadResult = createAction(
    '[RESULT] Load Result',
    props<{ resultId: string}>()
);

export const loadResultSuccess = createAction(
    '[RESULT] Load Result Success',
    props<{ result: Result}>()
);

export const loadResultFailed = createAction(
    '[RESULT] Load Result Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createResult = createAction(
    '[RESULT] Create Result',
    props<{ result: Result}>()
);

export const createResultSuccess = createAction(
    '[RESULT] Create Result Success',
    props<{ result: Result}>()
);

export const createResultFailed = createAction(
    '[RESULT] Create Result Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateResult = createAction(
    '[RESULT] Update Result',
    props<{ result: Result}>()
);

export const updateResultSuccess = createAction(
    '[RESULT] Update Result Success',
    props<{ result: Result}>()
);

export const updateResultFailed = createAction(
    '[RESULT] Create Result Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteResult = createAction(
    '[RESULT] Delete Result',
    props<{ result: Result}>()
);

export const deleteResultSuccess = createAction(
    '[RESULT] Delete Result Success',
    props<{ result: Result}>()
);

export const deleteResultFailed = createAction(
    '[RESULT] Create Result Failed',
    props<{ error: any}>()
);