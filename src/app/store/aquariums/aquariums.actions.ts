import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Aquarium, CreateAquariumRequestDto } from 'src/swagger/api-client';

export const AquariumsActions = createActionGroup({
	source: 'Aquariums',
	events: {
		'Load Aquariums': emptyProps(),
		'Load Aquariums Success': props<{ aquariums: Aquarium[] }>(),
		'Load Aquariums Failed': emptyProps(),

		'Create Aquarium': props<{ request: CreateAquariumRequestDto }>(),
		'Create Aquarium Success': props<{ aquarium: Aquarium }>()
	}
});
