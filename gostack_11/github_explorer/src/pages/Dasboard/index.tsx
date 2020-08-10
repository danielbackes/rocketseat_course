import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Title, LogoText, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" width="40" />
    <LogoText>
      <span>github</span>
      _explorer
    </LogoText>
    <Title>Explore repositories on Github.</Title>

    <Form>
      <input placeholder="Type the repository name" />
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/1704461?s=460&v=4"
          alt="Daniel Backes"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms! rocket!
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/1704461?s=460&v=4"
          alt="Daniel Backes"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms! rocket!
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/1704461?s=460&v=4"
          alt="Daniel Backes"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms! rocket!
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
