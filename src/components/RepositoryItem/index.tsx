import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface Props {
  repository: Repository;
}

const RepositoryItem: React.FC<Props> = ({ repository }: Props) => (
  <li>{repository.name}</li>
);

export default RepositoryItem;
