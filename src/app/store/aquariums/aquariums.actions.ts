import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Aquarium, AquariumDto, CreateAquariumRequestDto } from 'src/swagger/api-client';

export const AquariumsActions = createActionGroup({
	source: 'Aquariums',
	events: {
		'Load Aquariums': emptyProps(),
		'Load Aquariums Success': props<{ aquariums: AquariumDto[] }>(),
		'Load Aquariums Failed': emptyProps(),

		'Create Aquarium': props<{ request: CreateAquariumRequestDto }>(),
		'Create Aquarium Success': props<{ aquarium: AquariumDto }>(),

		'Delete Aquarium': props<{ id: number }>(),
		'Delete Aquarium Success': props<{ id: number }>(),

		'Select Aquarium': props<{ id: number }>(),
	}
});
