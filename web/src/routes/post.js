import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';
import styles from './post.less';

const Post = (dispatch) => {
  return (
    <div className={styles.normal}>
      <h2>Post an Article</h2>
      <div style={{ marginBottom: 16 }} />
      <div className={styles.post_input}>
        <p><b>Title</b></p>
        <Input placeholder="JavaScript is good" />
      </div>
      <div className={styles.post_input}>
        <p><b>Slug</b></p>
        <Input placeholder="js-good" />
        <p>This string will be used in the URL.</p>
      </div>
      <div className={styles.post_input}>
        <p><b>Text</b></p>
        <Input type="textarea" rows={4} placeholder="Text" />
      </div>
      <Button type="primary" size="large">Save</Button>
    </div>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Post);
