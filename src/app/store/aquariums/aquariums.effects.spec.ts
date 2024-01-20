import { of } from "rxjs";
import { AquariumsActions } from "./aquariums.actions";
import { createAquarium, deleteAquarium, loadAquarium, loadAquariumSuccess, loadAquariums } from "./aquariums.effects";
import { ApiClient, AquariumDto, AquariumType, CreateAquariumRequestDto, SwaggerResponse } from "../../../swagger/api-client";

describe('Aquariums Effects', () => {
    it('loads aquariums successfully', (done) => {
        const aquariumsMock: AquariumDto[] = [
            {
                id: 1,
                name: 'test',
                description: 'test',
                highTemp: 3,
                lowTemp: 2,
                type: AquariumType.Cold
            }
        ];

        const apiClientMock = {
            aquarium_GetAquariums: () => of(new SwaggerResponse(200, [], aquariumsMock))
        } as unknown as ApiClient;

        const actionsMock$ = of(AquariumsActions.loadAquariums());
      
        loadAquariums(actionsMock$, apiClientMock).subscribe((action) => {
          expect(action).toEqual(
            AquariumsActions.loadAquariumsSuccess({ aquariums: aquariumsMock })
          );
          done();
        });
      });

      it('creates aquarium successfully', (done) => {
        const aquariumMock: AquariumDto = {
            id: 1,
            name: 'test',
            description: 'test',
            highTemp: 3,
            lowTemp: 2,
            type: AquariumType.Cold
        };

        const request: CreateAquariumRequestDto = {
            name: aquariumMock.name,
            description: aquariumMock.description,
            type: aquariumMock.type,
            highTemp: aquariumMock.highTemp,
            lowTemp: aquariumMock.lowTemp
        };

        const apiClientMock = {
            aquarium_CreateAquarium: () => of(new SwaggerResponse(201, [], aquariumMock))
        } as unknown as ApiClient;

        const actionsMock$ = of(AquariumsActions.createAquarium({request}));
      
        createAquarium(actionsMock$, apiClientMock).subscribe((action) => {
          expect(action).toEqual(
            AquariumsActions.createAquariumSuccess({ aquarium: aquariumMock })
          );
          done();
        });
      });

      it('deletes aquarium successfully', (done) => {
        const apiClientMock = {
            aquarium_DeleteAquarium: () => of(new SwaggerResponse<void>(204, [], undefined))
        } as unknown as ApiClient;

        const actionsMock$ = of(AquariumsActions.deleteAquarium({id: 1}));
      
        deleteAquarium(actionsMock$, apiClientMock).subscribe((action) => {
          expect(action).toEqual(
            AquariumsActions.deleteAquariumSuccess({ id: 1 })
          );
          done();
        });
      });

      it('loads aquarium successfully', (done) => {
        const aquariumMock: AquariumDto = {
            id: 1,
            name: 'test',
            description: 'test',
            highTemp: 3,
            lowTemp: 2,
            type: AquariumType.Cold
        };

        const apiClientMock = {
            aquarium_GetAquariumById: () => of(new SwaggerResponse<AquariumDto>(200, [], aquariumMock))
        } as unknown as ApiClient;

        const actionsMock$ = of(AquariumsActions.loadAquarium({ id: aquariumMock.id }));
      
        loadAquarium(actionsMock$, apiClientMock).subscribe((action) => {
          expect(action).toEqual(
            AquariumsActions.loadAquariumSuccess({ aquarium: aquariumMock })
          );
          done();
        });
      });

      it('selects aquarium successfully', (done) => {
        const aquariumMock: AquariumDto = {
            id: 1,
            description: 'test',
            name: 'test',
            highTemp: 3,
            lowTemp: 2,
            type: AquariumType.Cold
        };

        const actionsMock$ = of(AquariumsActions.loadAquariumSuccess({ aquarium: aquariumMock }));
      
        loadAquariumSuccess(actionsMock$).subscribe((action) => {
          expect(action).toEqual(
            AquariumsActions.selectAquarium({ id: aquariumMock.id })
          );
          done();
        });
      });
});