import { createSelector, select } from '@ngrx/store';
import { aquariumsFeature, selectAll } from 'src/app/store/aquariums/aquariums.reducer';

export const {
    selectAquariumsState,
} = aquariumsFeature;

export const selectAquariums = createSelector(aquariumsFeature.selectAquariumsState, selectAll);
export const selectAquariumById = (id: number) => createSelector(selectAquariumsState, state => state.entities[id]);
