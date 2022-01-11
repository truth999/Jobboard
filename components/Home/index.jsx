import React from 'react';
import { JobList } from './JobList/index';
import { Container } from './style';
export const Home = () => {
  return (
    <>
      <Container>
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />

        <JobList />
      </Container>
    </>
  );
};
