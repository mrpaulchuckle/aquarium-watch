import { EntityState } from "@ngrx/entity";
import { AquariumDto } from "src/swagger/api-client";

export interface AquariumsFeatureState extends EntityState<AquariumDto> { }
