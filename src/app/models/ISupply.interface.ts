export interface ISupply {
    id: number;
    address: string;
    nis: number;
    alias: string;
    tags: ITags[];
    status: string;
    linkedSupplies: ILinkedSupplies[];
}

interface ITags {
    id: number;
    text: string;
}

interface ILinkedSupplies {
    id: number; 
    address: string; 
    area: string; 
    alias: string;
}