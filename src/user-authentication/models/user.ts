export class User {
  private name: string;
  private lastname: string;
  private phoneNumber: number;
  private email: string;

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

  validate(): void {
    if (!this.name) throw new Error('Nome precisa ser preenchido.');
    if (!this.email) throw new Error('Email precisa ser preenchido.');
    if (!this.phoneNumber) throw new Error('Celular precisa ser preenchido.');
    if (!this.lastname) throw new Error('Sobrenome precisa ser preenchido.');
  }
}
