import { User } from '../../src/domain/User.js';

/**
 * Object Mother: fornece usuários prontos e fixos.
 * Usuários são simples e quase não variam entre os testes,
 * então alguns métodos estáticos com nomes claros bastam.
 */
export class UserMother {
    static umUsuarioPadrao() {
        return new User(1, 'Usuário Padrão', 'padrao@email.com', 'PADRAO');
    }

    static umUsuarioPremium() {
        return new User(2, 'Usuário Premium', 'premium@email.com', 'PREMIUM');
    }
}
