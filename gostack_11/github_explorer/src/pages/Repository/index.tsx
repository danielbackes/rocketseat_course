import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="Github Explorer" width="40" />
          <span>
            <strong>github_</strong>
            explorer
          </span>
        </div>
        <Link to="/">
          <FiChevronsLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repository</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Open issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdf">
          <div>
            <strong>asdfasd</strong>
            <p>asdfa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
