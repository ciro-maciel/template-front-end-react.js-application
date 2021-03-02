import React from 'react';
import PropTypes from 'prop-types';

import Off from './Off';
import On from './On';

const Home = (props) => {
  const { user } = props;

  // console.log('props', props);

  // return user.data ? <On {...props} /> : <Off {...props} />;

  return <Off {...props} />;
};

Home.propTypes = {
  user: PropTypes.object,
};

export default Home;
