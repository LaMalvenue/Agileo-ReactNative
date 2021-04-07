import React from 'react';

import DetailedTwitt from './components/DetailedTwitt.js';

const Details = (props) => {
  return <DetailedTwitt {...props.route.params} />;
};

export default Details;