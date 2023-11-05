import { AquariumType } from "src/swagger/api-client";

export class AquariumsHelper {
    public static getAquariumType(type: AquariumType | undefined): string {
        if (!type) {
          return '';
        }
    
        return AquariumType[type];
    }
}