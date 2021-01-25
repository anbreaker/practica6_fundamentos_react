import React from 'react';
import {useHistory} from 'react-router-dom';
import {HeadLayout} from './HeadLayout';
import {FooterLayout} from './FooterLayout';
import {useGetSessionDetails} from '../../context/AuthContext';

export const Layout = ({children}) => {
  const history = useHistory();

  const {isLogged} = useGetSessionDetails();

  if (!isLogged) return history.push('/login');

  return (
    <>
      <HeadLayout />
      {children}
      <FooterLayout />
    </>
  );
};