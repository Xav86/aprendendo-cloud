/**
 * Interface para usuário
 * Representa a estrutura de dados de um usuário no sistema
 */
export interface IUser {
  id: string;
  nome: string;
  email: string;
  senha: string; // Será armazenada como hash
  status: 'ativo' | 'inativo';
  criadoEm?: Date;
  atualizadoEm?: Date;
}

/**
 * Tipo para criar um novo usuário (sem id e datas)
 */
export type CreateUserInput = Omit<IUser, 'id' | 'criadoEm' | 'atualizadoEm'>;

/**
 * Tipo para atualizar um usuário
 */
export type UpdateUserInput = Partial<Omit<IUser, 'id' | 'criadoEm'>>;
