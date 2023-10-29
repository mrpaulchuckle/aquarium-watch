import { EntityState } from "@ngrx/entity";
import { AquariumDto } from "src/swagger/api-client";

export interface AquariumsState extends EntityState<AquariumDto> {
    loading: boolean;
}
