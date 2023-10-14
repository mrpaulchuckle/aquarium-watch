import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAll } from './aquariums.reducer';

export const getAquariumsState = (state: AppState) => state['aquariums'];
export const selectAquariums = createSelector(getAquariumsState, selectAll);
