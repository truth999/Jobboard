import { Container, Delete } from './style';
import { JobItem } from '../JobItem';
import { UserContext } from '../../../hook/Context';
import { useContext } from 'react';

export const JobList = (props) => {
  const { allJobs } = props;
  const { isConnected } = useContext(UserContext);

  return (
    <Container>
      {!allJobs
        ? 'Loading'
        : allJobs?.map((item) => (
            <>
              {isConnected ? <Delete onClick={() => console.log(item.id)}>Supprimer</Delete> : null}
              <JobItem key={item.id} {...item} />
            </>
          ))}
    </Container>
  );
};
