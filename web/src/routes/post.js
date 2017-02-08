import React from 'react';
import { connect } from 'dva';
import styles from './post.less';

const Post = () => {
  return (
    <div className={styles.normal}>
      Route Component: Post
    </div>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Post);
