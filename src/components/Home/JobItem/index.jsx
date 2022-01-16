import React from 'react';
import { Container, Informations, CompanyLogo, Picture, List } from './style';

export const JobItem = ({
  coverImage,
  companyLogo,
  companyName,
  title,
  contractType,
  localization,
  publishedAt,
}) => {
  return (
    <Container>
      <Picture src={coverImage} />
      <CompanyLogo src={companyLogo} />
      <Informations>
        <p>{companyName}</p>
        <h3>{title}</h3>
        <List>
          <li>{contractType}</li>
          <li>{localization}</li>
          <li>{publishedAt}</li>
        </List>
      </Informations>
    </Container>
  );
};
