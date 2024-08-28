import { LoginType } from "./enums/login-type.enum";

export class User {
  private name: string;
  private lastname: string;
  private document: string;
  private phoneNumber: number;
  private password: string;
  private loginType: LoginType;
  private email: string;

  constructor(document: string, name: string) {
    this.document = document;
    this.name = name;
  }

  static of(document: string, name: string): User {
    return new User(document, name);
  }

  getName(): string {
    return this.name;
  }

  getLastname(): string {
    return this.lastname;
  }

  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getLoginType(): LoginType {
    return this.loginType;
  }

  getDocument(): string {
    return this.document;
  }

  validate(): void {
    if (!this.name) throw new Error('Nome precisa ser preenchido.');
    if (!this.email) throw new Error('Email precisa ser preenchido.');
    if (!this.phoneNumber) throw new Error('Celular precisa ser preenchido.');
    if (!this.lastname) throw new Error('Sobrenome precisa ser preenchido.');
  }
}
