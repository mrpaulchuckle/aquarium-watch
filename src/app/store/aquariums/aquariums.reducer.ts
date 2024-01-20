import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { AquariumsState } from "./aquariums.model";
import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { AquariumsActions } from "./aquariums.actions";
import { AquariumDto } from "../../../swagger/api-client";

export const adapter: EntityAdapter<AquariumDto> = createEntityAdapter<AquariumDto>();

export const initialState: AquariumsState = adapter.getInitialState({
	selectedAquariumId: null,
	loading: true
});

export const aquariumsFeature = createFeature({
	name: 'aquariums',
	reducer: createReducer(
		initialState,
		on(AquariumsActions.loadAquariums, (state) => ({ ...state, loading: true })),
		on(AquariumsActions.loadAquariumsSuccess, (state, { aquariums }) => ({ ...adapter.setAll(aquariums, { ...state, loading: false }) })),
		on(AquariumsActions.createAquariumSuccess, (state, { aquarium }) => ({ ...adapter.addOne(aquarium, { ...state })})),
		on(AquariumsActions.deleteAquariumSuccess, (state, { id }) => ({ ...adapter.removeOne(id, state)})),
		on(AquariumsActions.loadAquarium, (state) => ({ ...state, loading: true })),
		on(AquariumsActions.loadAquariumSuccess, (state, { aquarium }) => ({ ...adapter.upsertOne(aquarium, { ...state, loading: false })})),
		on(AquariumsActions.selectAquarium, (state, { id }) => ({ ...state, selectedAquariumId: id }))
	),
	extraSelectors: ({
		selectAquariumsState,
		selectEntities,
		selectSelectedAquariumId
	}) => ({
		...adapter.getSelectors(selectAquariumsState),
		selectSelectedAquarium: createSelector(
			selectSelectedAquariumId,
			selectEntities,
			(selectedId, entities) => selectedId ? entities[selectedId] : null
		  ),
	})
});

export const {
	name,
	reducer
} = aquariumsFeature;
