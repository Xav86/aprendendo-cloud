import { IUser, CreateUserInput, UpdateUserInput } from '../types/user';

/**
 * Serviço de Usuário
 * Contém a lógica de negócio para gerenciar usuários
 * Por enquanto usa um array como armazenamento (em produção seria um banco de dados)
 */
class UserService {
  // Array em memória para armazenar usuários
  // Em produção, seria um banco de dados real (PostgreSQL, MongoDB, etc)
  private users: IUser[] = [
    {
      id: '1',
      nome: 'João Silva',
      email: 'joao@example.com',
      senha: '$2b$10$abcdefghijklmnopqrstuvwxyz123456789', // Exemplo de hash
      status: 'ativo',
      criadoEm: new Date('2026-03-01'),
      atualizadoEm: new Date('2026-03-01'),
    },
  ];

  /**
   * Gera um ID único (UUID simplificado)
   * Em produção, o banco de dados geraria isso
   */
  private gerarId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  /**
   * Simula hash de senha
   * Em produção, usaria bcrypt.hash() da biblioteca bcrypt
   */
  private hashSenha(senha: string): string {
    // Simulação do hash - em produção usar: bcrypt.hashSync(senha, 10)
    return `$2b$10$${Buffer.from(senha).toString('base64')}`;
  }

  /**
   * Obtém todos os usuários
   */
  obterTodos(): IUser[] {
    return this.users;
  }

  /**
   * Obtém um usuário por ID
   */
  obterPorId(id: string): IUser | null {
    return this.users.find(user => user.id === id) || null;
  }

  /**
   * Obtém um usuário por email
   */
  obterPorEmail(email: string): IUser | null {
    return this.users.find(user => user.email === email) || null;
  }

  /**
   * Cria um novo usuário
   */
  criar(dado: CreateUserInput): IUser {
    // Validar se email já existe
    if (this.obterPorEmail(dado.email)) {
      throw new Error('Email já cadastrado no sistema');
    }

    const novoUsuario: IUser = {
      id: this.gerarId(),
      nome: dado.nome,
      email: dado.email,
      senha: this.hashSenha(dado.senha),
      status: dado.status || 'ativo',
      criadoEm: new Date(),
      atualizadoEm: new Date(),
    };

    this.users.push(novoUsuario);
    return novoUsuario;
  }

  /**
   * Atualiza um usuário existente
   */
  atualizar(id: string, dados: UpdateUserInput): IUser | null {
    const usuarioIndex = this.users.findIndex(user => user.id === id);

    if (usuarioIndex === -1) {
      return null;
    }

    // Se está tentando alterar email, validar se não existe outro com este email
    if (dados.email && dados.email !== this.users[usuarioIndex].email) {
      if (this.obterPorEmail(dados.email)) {
        throw new Error('Email já cadastrado no sistema');
      }
    }

    const usuarioAtualizado: IUser = {
      ...this.users[usuarioIndex],
      ...dados,
      senha: dados.senha ? this.hashSenha(dados.senha) : this.users[usuarioIndex].senha,
      atualizadoEm: new Date(),
    };

    this.users[usuarioIndex] = usuarioAtualizado;
    return usuarioAtualizado;
  }

  /**
   * Deleta um usuário
   */
  deletar(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      return false;
    }

    this.users.splice(index, 1);
    return true;
  }

  /**
   * Altera o status de um usuário
   */
  alterarStatus(id: string, status: 'ativo' | 'inativo'): IUser | null {
    return this.atualizar(id, { status });
  }
}

// Exportar instância única do serviço (padrão Singleton)
export default new UserService();
