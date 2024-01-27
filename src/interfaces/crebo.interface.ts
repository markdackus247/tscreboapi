import { Kerntaak } from './kerntaak.interface';

/*
 * All the levels of the MBO-educations in the Netherlands.
 * Normale expressed like: niveau 2 or niveau 4.
 */
export type MBOLevels = "1" | "2" | "3" | "4" | ""

/*
 * Crebo sets the types for all the fields of the Crebo table.
 * Every education has its own "kerntaken" (core tasks).
 * The types for the kerntaken is stored in its own interface: Kerntaak.
 */
export interface Crebo {
    /*
     * _id stores the MongoDB id of the document.
     * _id isn't being used by this application.
     */
    _id?: string;

    
    id: string;
    level: MBOLevels;
    name: string;
    description?: string;
    sbblink?: string;
    kdpdflink?: string;
    fileCode?: string;
    kerntaken?: [Kerntaak]
}