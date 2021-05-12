import { Categoria } from "./Categoria";

export class Produto
{
    public id: number;
    public nome: string;
    public foto: string;
    public preco: number;
    public desconto: number;
    public descricao: string;
    public quantidade: number;
    public categoria: Categoria;
}
