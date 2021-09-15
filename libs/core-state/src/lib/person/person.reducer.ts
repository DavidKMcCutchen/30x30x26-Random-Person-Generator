import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Result } from "libs/api-interfaces/src/lib/api-interfaces";
import * as ResultActions from './person.actions';

export const RESULT_FEATURE_KEY = 'results';

export interface ResultState extends EntityState<Result> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface ResultPartialState {
    readonly [RESULT_FEATURE_KEY]: ResultState
};

export const resultAdapter: EntityAdapter<Result> = createEntityAdapter<Result>({ selectId: (p) => p.id.name});

export const initialResultState: ResultState = resultAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): ResultState => ({ ...state, error});

const onDispatch = (state, action): ResultState => ({
    ...state,
    loaded: false,
    error: null
});

const _resultReducer = createReducer(
    initialResultState,
    on(
        ResultActions.loadResultFailed,
        ResultActions.loadResultsFailed,
        ResultActions.createResultFailed,
        ResultActions.updateResultFailed,
        ResultActions.deleteResultFailed,
        onFailed
    ),
    on(
        ResultActions.loadResult,
        ResultActions.loadResults,
        ResultActions.createResult,
        ResultActions.updateResult,
        ResultActions.deleteResult,
        onDispatch
    ),
    on(
        ResultActions.loadResultSuccess, (state, { result }) =>
        resultAdapter.upsertOne(result, {...state, loaded: true})
    ),
    on(
        ResultActions.selectResult, (state, { resultId }) => ({
            ...state,
            selectedId: resultId
        })
    ),
    on(
        ResultActions.loadResultsSuccess, (state, { results }) =>
        resultAdapter.setAll(results, {...state, loaded: true})
    ),
    on(
        ResultActions.deleteResultSuccess, (state, { result }) =>
        resultAdapter.removeOne(result.id.name, {...state, loaded: true})
    ),
    on(
        ResultActions.updateResultSuccess, (state, { result }) =>
        resultAdapter.updateOne(
            {id: result.id.name, changes: result},
            {...state, loaded: true}
        )
    ),
    on(
        ResultActions.createResultSuccess, (state, {result }) =>
        resultAdapter.addOne(result, {...state, loaded: true})
    ),
)

export function resultReducer(
    state: ResultState | undefined,
    action: Action
) {
    return _resultReducer(state, action)
}