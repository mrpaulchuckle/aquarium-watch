import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Aquarium } from 'src/swagger/api-client';

export const AquariumsActions = createActionGroup({
	source: 'Aquariums',
	events: {
		'Load Aquariums': emptyProps(),
		'Load Aquariums Success': props<{ aquariums: Aquarium[] }>(),
		'Load Aquariums Failed': emptyProps()
	}
});
