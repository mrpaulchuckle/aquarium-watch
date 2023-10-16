import { createSelector } from '@ngrx/store';
import { aquariumsFeature } from './aquariums.reducer';

export const selectAquariums = createSelector(aquariumsFeature.selectEntities, entities => Object.values(entities));
