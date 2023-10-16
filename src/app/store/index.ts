import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { AquariumsFeatureState } from "./aquariums/aquariums.model";
import { aquariumsFeature } from "./aquariums/aquariums.reducer";
import { AquariumsEffects } from "./aquariums/aquariums.effects";

export interface AppState {
    aquariums: AquariumsFeatureState
}

export const reducers: ActionReducerMap<AppState> = {
	aquariums: aquariumsFeature.reducer
};

export const effects = [
	AquariumsEffects
];