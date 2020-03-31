export interface Persona{
    rol: 'A' | 'B' | 'C'; 
    activo: boolean;
    nombre: string;
    apellido: string;
    id?: number;
}