import React from 'react';
import { Container } from './style';
import { JobList } from '../../pages/JobList';

export const Home = () => {
  return (
    <>
      <Container>
        <JobList />
      </Container>
    </>
  );
};
