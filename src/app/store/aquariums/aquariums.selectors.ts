import { createSelector } from '@ngrx/store';
import { aquariumsFeature, selectAll, selectEntities } from 'src/app/store/aquariums/aquariums.reducer';

export const {
    selectAquariumsState,
    selectSelectedId
} = aquariumsFeature;

export const selectAquariums = createSelector(aquariumsFeature.selectAquariumsState, selectAll);
export const selectedAquarium = createSelector(selectAquariums, selectSelectedId, (entities, id) => id !== undefined ? entities[id] : null);
