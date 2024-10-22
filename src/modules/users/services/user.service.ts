import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from '../models/user.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    private readonly userAuthenticationRepository: UserRepository,
  ) {}

  async findUserByDocument(document: string): Promise<UserDto> {
    if (!document) throw new Error('Documento inválido');
    try {
      const user = await this.userAuthenticationRepository.findUserByDocument(document);
      if (!user) return null;
      return user;
    } catch (error) {
      console.log(`Ocorreu um erro ao buscar usuário pelo documento: ${error}`);
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<UserDto> {
    if (!email) throw new BadGatewayException('Email inválido');
    try {
      const user = await this.userAuthenticationRepository.findUserByEmail(email);
      if (!user) throw new NotFoundException(`Usuário não encontrado com este email: ${email}`);
      return user;
    } catch (error) {
      console.log(`Ocorreu um erro ao buscar usuário pelo email: ${error}`);
      throw error;
    }
  }

  async findAllSupliers(): Promise<UserDto[]> {
    return await this.userAuthenticationRepository.findAllSuppliers();
  }

  async createUser(user: UserDto): Promise<void> {
    try {
      const hasUser = await this.findUserByDocument(user.document);
      if (hasUser) throw new BadGatewayException('Já existe um usuário com esse documento');
      await this.userAuthenticationRepository.createUser(user);
    } catch (error) {
      console.log(`Ocorreu um erro durante a criação do usuário: ${error}`);
      throw error;
    }
  }

  async updateUser(id: string, user: User): Promise<boolean> {
    if (!id || !user) throw new Error('Usuário inválido');
    try {
      return await this.userAuthenticationRepository.updateUser(id, user);
    } catch (error) {
      console.log(`Ocorreu um erro ao atualizar usuário: ${error}`);
      throw error;
    }
  }

  async deleteUser(document: string): Promise<void> {
    await this.userAuthenticationRepository.deleteUser(document);
  }
}
