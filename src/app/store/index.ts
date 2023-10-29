import { ActionReducerMap } from "@ngrx/store";
import { AquariumsState } from "./aquariums/aquariums.model";
import { aquariumsFeature } from "./aquariums/aquariums.reducer";
import { AquariumsEffects } from "./aquariums/aquariums.effects";

export interface AppState {
    [aquariumsFeature.name]: AquariumsState
}

export const reducers: ActionReducerMap<AppState> = {
	[aquariumsFeature.name]: aquariumsFeature.reducer
};

export const effects = [
	AquariumsEffects
];