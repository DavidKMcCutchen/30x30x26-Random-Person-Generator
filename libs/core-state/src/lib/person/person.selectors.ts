import { createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyResult } from "libs/api-interfaces/src/lib/api-interfaces";
import { resultAdapter, ResultState, RESULT_FEATURE_KEY } from "./person.reducer";

export const getResultState = createFeatureSelector<ResultState>(RESULT_FEATURE_KEY);

const { selectAll, selectEntities } = resultAdapter.getSelectors();

export const getResultsLoaded = createSelector(
    getResultState,
    (state: ResultState) => state.loaded
);

export const getResultError = createSelector(
    getResultState,
    (state: ResultState) => state.error
);

export const getAllResults = createSelector(
    getResultState,
    (state: ResultState) => selectAll(state)
);

export const getResultEntities = createSelector(
    getResultState,
    (state: ResultState) => selectEntities(state)
);

export const getSelectedResultId = createSelector(
    getResultState,
    (state: ResultState) => state.selectedId
);

export const getSelectedResult = createSelector(
    getResultEntities,
    getSelectedResultId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyResult
);