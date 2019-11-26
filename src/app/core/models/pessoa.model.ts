export class PessoaModel {
  public id: any;
  public nome: string;
  public dataNascimento: Date;
  public cep: string;
  public logradouro: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public status?: string;

  public isSelected = false;
}