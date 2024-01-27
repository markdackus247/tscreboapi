import { Werkproces } from "./werkproces.interface";

export type KerntaakPart = "basisdeel" | "profieldeel" | "";

export interface Kerntaak {
    _id?: string;
    id: string;
    code: string;
    part: KerntaakPart;
    name: string;
    informalName: string;
    description?: string;
    werkprocessen?: [Werkproces];
}