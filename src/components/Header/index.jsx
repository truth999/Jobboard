import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../../hook/Context';

import { Container, HeaderRow, Connection, Item, Logo, List } from './style';

export const Header = () => {
  const { isConnected, toogleConnected } = useContext(UserContext);
  return (
    <HeaderRow>
      <Container>
        <List>
          <Link href="/">
            <Logo src="/logo.png" alt="Welcome to the Jungle" />
          </Link>
          <Link href="/">
            <Item>Home</Item>
          </Link>
          <Link href="/Media">
            <Item>Média</Item>
          </Link>
          <Link href="/discover">
            <Item>Découvrir les entreprises</Item>
          </Link>
          <Link href="/FindJobs">
            <Item>Trouver un job</Item>
          </Link>
          {isConnected ? (
            <Link href="/CreateOffer">
              <Item>Creer une offre</Item>
            </Link>
          ) : null}
          {/* <Link href="/Connection"> */}
          <Connection onClick={toogleConnected}>
            {isConnected ? 'Se deconnecter' : 'Se connecter'}
          </Connection>
          {/* </Link> */}
        </List>
      </Container>
    </HeaderRow>
  );
};
