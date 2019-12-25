import React from 'react';
import ReactLoading from 'react-loading';
import { Article } from './generic';

const Loading = () => (
  <Article>
    <ReactLoading type='bars' color='#248afd' />
  </Article>
);

export default Loading;
