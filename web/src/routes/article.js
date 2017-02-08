import React from 'react';
import { connect } from 'dva';
import styles from './article.less';

const Article = () => {
  return (
    <div className={styles.normal}>
      Route Component: Article
    </div>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Article);
