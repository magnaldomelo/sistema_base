import { format, parseISO } from 'date-fns';
import pt_br from 'date-fns/locale/pt-BR';

import Mail from '../../lib/Mail';

class CancellationMail {
    get key() {
        return 'CancellationMail';
    }

    async handle({ data }) {
        const { appointment } = data;
        await Mail.sendMail({
            to: `${appointment.provider.nome} magnaldo.melo@gmail.com`,
            subject: 'Agendamento Cancelado - Gobarber',
            template: 'cancellation',
            context: {
                provider: appointment.provider.nome,
                user: appointment.user.nome,
                date: format(
                    parseISO(appointment.date),
                    "'dia' dd 'de' MMMM', às' H:mm'h'",
                    {
                        locale: pt_br,
                    }
                ),
            },
        });
    }
}

export default new CancellationMail();
