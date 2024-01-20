import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AquariumDto, CreateAquariumRequestDto } from '../../../swagger/api-client';

export const AquariumsActions = createActionGroup({
	source: 'Aquariums',
	events: {
		loadAquariums: emptyProps(),
		loadAquariumsSuccess: props<{ aquariums: AquariumDto[] }>(),
		loadAquariumsFailed: emptyProps(),

		createAquarium: props<{ request: CreateAquariumRequestDto }>(),
		createAquariumSuccess: props<{ aquarium: AquariumDto }>(),

		deleteAquarium: props<{ id: number }>(),
		deleteAquariumSuccess: props<{ id: number }>(),

		loadAquarium: props<{ id: number }>(),
		loadAquariumSuccess: props<{ aquarium: AquariumDto }>(),
		loadAquariumFailed: emptyProps(),

		selectAquarium: props<{ id: number }>()
	}
});
