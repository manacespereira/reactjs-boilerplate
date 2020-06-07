import React from 'react';

import { Container } from './styles';
import RepositoryList from '../../components/RepositoryList';

const RepositoriesPage: React.FC = () => {
  return (
    <Container xpto="xpto">
      <h1>Repositories Page</h1>
      <RepositoryList />
    </Container>
  );
};

export default RepositoriesPage;
