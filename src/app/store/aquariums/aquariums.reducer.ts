import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Aquarium } from "src/swagger/api-client";
import { AquariumsFeatureState } from "./aquariums.model";
import { createFeature, createReducer, on } from "@ngrx/store";
import { AquariumsActions } from "./aquariums.actions";

export const adapter: EntityAdapter<Aquarium> = createEntityAdapter<Aquarium>();
const initialState: AquariumsFeatureState = adapter.getInitialState();

export const aquariumsFeature = createFeature({
	name: 'aquariums',
	reducer: createReducer(
		initialState,
		on(AquariumsActions.loadAquariumsSuccess, (state, { aquariums }) => { return adapter.setAll(aquariums, state); }),
	),
});

export const {
	name,
	reducer
} = aquariumsFeature;

export const { selectAll } = adapter.getSelectors();
