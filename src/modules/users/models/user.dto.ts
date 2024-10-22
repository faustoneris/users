import { LoginType } from "./enums/login-type.enum";

export class UserDto {
  name: string;
  lastname?: string;
  fantasyName?: string;
  document: string;
  phoneNumber: number;
  password: string;
  loginType: LoginType;
  email: string;

  constructor(document: string, name: string) {
    this.document = document;
    this.name = name;
  }

  static of(document: string, name: string): UserDto {
    return new UserDto(document, name);
  }

  isSuplier(): boolean {
    return this.loginType == LoginType.SUPPLIER;
  }

  validate(): void {
    if (!this.name) throw new Error('Nome precisa ser preenchido.');
    if (!this.email) throw new Error('Email precisa ser preenchido.');
    if (!this.phoneNumber) throw new Error('Celular precisa ser preenchido.');
    if (!this.lastname) throw new Error('Sobrenome precisa ser preenchido.');
  }
}
