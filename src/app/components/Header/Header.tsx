import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { APPTITLE } from '../../constants';
import Container from '../atoms/Container';
import ThemeSwitcher from '../../../features/theme/ThemeSwitcher/ThemeSwitcher';

const Heading = styled.div`
  background: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 0;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.bg};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <Heading>
      <Container>
        <Flex>
          <Title onClick={handleClick}>{APPTITLE}</Title>
          <ThemeSwitcher />
        </Flex>
      </Container>
    </Heading>
  );
};

export default Header;
