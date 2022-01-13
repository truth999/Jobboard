import React, { useState } from 'react';
import { JobItem } from '../JobItem/index';
import { Container } from './style';
import { allJobs } from '../../index.ts';

export const JobList = () => {
  return (
    <Container>
      {!allJobs ? 'Loading' : allJobs[0]?.map((item) => <JobItem key={item.id} {...item} />)}
    </Container>
  );
};
