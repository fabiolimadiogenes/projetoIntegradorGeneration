import { Categoria } from "./Categoria";

export class Produto
{
    public id: number;
    public nome: string;
    public preco: number;
    public desconto: number;
    public quantidade: number;
    public categoria: Categoria;
}