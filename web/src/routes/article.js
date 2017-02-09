import React from 'react';
import { connect } from 'dva';
import styles from './article.less';
import ArticleList from '../components/article/articleList';

const Article = ({ dispatch, article }) => {
  const { list, total, current, loading } = article;
  const articleListProps = {
    dataSource: list,
    total,
    loading,
    current,
    onPageChange(page) {
      dispatch({
        type: 'article/query',
        payload: {
          page,
        },
      });
    },
  };

  return (
    <div className={styles.normal}>
      <ArticleList {...articleListProps} />
    </div>
  );
};

Article.propTypes = {};

function mapStateToProps({ article }) {
  return { article };
}

export default connect(mapStateToProps)(Article);
