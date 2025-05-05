export interface ISupply {
    id: number;
    address: string;
    area: string;
    nis: number;
    alias?: string;
    tags?: ITags[];
    status: string;
}

interface ITags {
    id: number;
    text: string;
}