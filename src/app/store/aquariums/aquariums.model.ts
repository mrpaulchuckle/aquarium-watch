import { EntityState } from "@ngrx/entity";
import { Aquarium } from "src/swagger/api-client";

export interface AquariumsFeatureState extends EntityState<Aquarium> { }
