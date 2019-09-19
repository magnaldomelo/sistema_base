import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_purple.svg';

import Notifications from '~/components/Notifications';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <div>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.nome}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={profile.avatar.url || "https://api.adorable.io/avatars/50/abott@adorable.png"}
                            alt={profile.nome}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
