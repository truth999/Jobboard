import { Container } from './style';
import { JobItem } from '../JobItem';

export const JobList = (props) => {
  const { allJobs } = props;

  return (
    <Container>
      {!allJobs ? 'Loading' : allJobs?.map((item) => <JobItem key={item.id} {...item} />)}
    </Container>
  );
};
