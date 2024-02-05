export interface Werkproces {
    _id?: string;
    id: string;
    code: string;
    name: string;
    informalName: string;
    description?: string;
    outcome?: string;
    behaviour?: string;
}

export interface WerkprocesUpdate {
    _id?: string;
    id?: string;
    code?: string;
    name?: string;
    informalName?: string;
    description?: string;
    outcome?: string;
    behaviour?: string;
}