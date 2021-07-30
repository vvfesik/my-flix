import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { switchedTheme } from '../themeSlice';

interface SwitcherProps {
  current: string;
}

const Switcher = styled.div<SwitcherProps>`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bg};
  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: calc(1.5rem - 4px);
    height: calc(1.5rem - 4px);
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.text};
    top: 2px;
    left: 2px;
    transition: all 0.3s ease;
    transform: translateX(${({ current }) => current === 'lightTheme' ? '0' : 'calc(100% - 4px)' });
  }
`;

const ThemeSwitcher = () => {
  const current = useAppSelector(({ theme }) => theme.current);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved && saved !== current) {
      dispatch(switchedTheme());
    }
  }, [current]);
  const handleClick = () => dispatch(switchedTheme());
  return (
    <Switcher onClick={handleClick} current={current} />
  );
};

export default ThemeSwitcher;
