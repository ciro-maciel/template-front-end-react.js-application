import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

// import { Stream, Dashboard } from 'components';
// import { Layout } from 'containers';

const On = (props) => {
  const { user, project, navigation, utility } = props;
  const [newStream, setNewStream] = useState();

  return (
    <div>ds</div>
    // <Layout {...props}>
    //   <Helmet>
    //     <title>Workspace by ciro-maciel</title>
    //   </Helmet>
    //   {!project.data ? (
    //     <Dashboard.Layout user={user} project={project} navigation={navigation} utility={utility} />
    //   ) : (
    //     <>
    //       <Stream.Item user={user} project={project} utility={utility} onNewStream={(stream) => setNewStream(stream)} />
    //       <Stream.List user={user} project={project} utility={utility} navigation={navigation} newStream={newStream} />
    //     </>
    //   )}
    // </Layout>
  );
};

On.propTypes = {
  user: PropTypes.object,
  project: PropTypes.object,
  navigation: PropTypes.object,
  utility: PropTypes.object,
};

export default On;
