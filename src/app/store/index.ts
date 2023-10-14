import { ActionReducerMap } from "@ngrx/store";
import { AquariumsFeatureState } from "./aquariums/aquariums.model";
import { aquariumsFeature } from "./aquariums/aquariums.reducer";

export interface AppState {
    [aquariumsFeature.name]: AquariumsFeatureState
}

export const reducers: ActionReducerMap<AppState> = {
	[aquariumsFeature.name]: aquariumsFeature.reducer
};