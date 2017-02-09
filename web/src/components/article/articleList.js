import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import styles from './articleList.less';

const ArticleList = (props) => {
  const { total, current, loading, dataSource, onPageChange } = props;
  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
  }, {
    title: 'Actions',
    key: 'operation',
    render: (text, record) => (
      <p>
        <Popconfirm title="确定要删除吗？" onConfirm={() => {}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  // 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: (page) => {
      onPageChange(page);
    },
  };

  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  );
};

export default ArticleList;
