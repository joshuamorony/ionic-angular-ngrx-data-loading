import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as fromData from "./data.reducer";

export interface AppState {
  data: fromData.DataState;
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromData.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getDataState = (state: AppState) => state.data;
export const getAllItems = createSelector(
  getDataState,
  fromData.getItems
);
