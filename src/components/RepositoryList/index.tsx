import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from '../../hooks';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

const RepositoryList: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ repositories }) => repositories);
  useEffect(() => {
    dispatch(RepositoriesActions.loadRequest());
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {data.map((repository: Repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoryList;
