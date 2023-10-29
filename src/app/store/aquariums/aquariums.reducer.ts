import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { AquariumDto } from "src/swagger/api-client";
import { AquariumsState } from "./aquariums.model";
import { createFeature, createReducer, on } from "@ngrx/store";
import { AquariumsActions } from "./aquariums.actions";

export const adapter: EntityAdapter<AquariumDto> = createEntityAdapter<AquariumDto>();

export const initialState: AquariumsState = adapter.getInitialState({
	loading: true
});

export const aquariumsFeature = createFeature({
	name: 'aquariums',
	reducer: createReducer(
		initialState,
		on(AquariumsActions.loadAquariums, (state) => ({ ...state, loading: true })),
		on(AquariumsActions.loadAquariumsSuccess, (state, { aquariums }) => ({ ...adapter.setAll(aquariums, { ...state, loading: false }) })),
		on(AquariumsActions.createAquariumSuccess, (state, { aquarium }) => ({ ...adapter.addOne(aquarium, { ...state })})),
		on(AquariumsActions.deleteAquariumSuccess, (state, { id }) => ({ ...adapter.removeOne(id, state)}))
	)
});

export const {
	name,
	reducer,
} = aquariumsFeature;

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = adapter.getSelectors();