import { Region } from "../entities/region.entity";
export declare class CreateRegionDto extends Region {
    regionName: string;
    regionStates: string[];
}
