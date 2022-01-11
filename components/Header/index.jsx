import React from 'react';
import Link from 'next/link';

import { Container, HeaderRow, Connection, Item, Logo, List } from './style';

export const Header = () => {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <HeaderRow>
      <Container>
        <List>
          <Link href="/">
            <Logo src="/logo.png" alt="Wlecome to the Jungle" />
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
          <Link href="/CreateOffer">
            <Item>Creer une offre</Item>
          </Link>
          <Link href="/Connection">
            <Connection>Se connecter</Connection>
          </Link>
        </List>
      </Container>
    </HeaderRow>
  );
};
