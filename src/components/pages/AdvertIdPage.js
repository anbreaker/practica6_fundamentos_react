import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {urlBackend} from '../../helpers/apiUrls';
import {AdvertId} from '../AdvertId';
import {Layout} from '../Layout';
import {SpinnerComponent} from '../SpinnerComponent';

export const AdvertIdPage = (props) => {
  const {id} = useParams();
  const [advert, setadvert] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${urlBackend}api/ads/${id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        window.location.href = '/login';
      })
      .then((response) => setadvert(response))
      .catch((error) => console.error('Error:', error));
  }, [token, id]);

  return <Layout>{advert ? <AdvertId ad={advert} /> : <SpinnerComponent />}</Layout>;
};
