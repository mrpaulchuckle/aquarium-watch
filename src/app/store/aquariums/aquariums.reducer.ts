import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { AquariumDto } from "src/swagger/api-client";
import { AquariumsFeatureState } from "./aquariums.model";
import { createFeature, createReducer, on } from "@ngrx/store";
import { AquariumsActions } from "./aquariums.actions";

export const adapter: EntityAdapter<AquariumDto> = createEntityAdapter<AquariumDto>();
export const initialState: AquariumsFeatureState = adapter.getInitialState();

export const aquariumsFeature = createFeature({
	name: 'aquariums',
	reducer: createReducer(
		initialState,
		on(AquariumsActions.loadAquariumsSuccess, (state, { aquariums }) => { return adapter.setAll(aquariums, state); }),
		on(AquariumsActions.createAquariumSuccess, (state, { aquarium }) => { return adapter.upsertOne(aquarium, { ...state })}),
		on(AquariumsActions.deleteAquariumSuccess, (state, { id }) => { return adapter.removeOne(id, state)}),
	)
});

export const {
	name,
	reducer
} = aquariumsFeature;
