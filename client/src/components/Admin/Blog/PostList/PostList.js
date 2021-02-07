import React from "react";
import { List, Button, Modal, notification } from "antd";
import { EyeFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./PostList.scss";

const { confirm } = Modal;

export default function PostList(props) {
  const { posts } = props;

  console.log(posts);
  return (
    <div className="post-list">
      <List
        dataSource={posts.docs}
        renderItem={(post) => <Post post={post} />}
      />
    </div>
  );
}

function Post(props) {
  const { post } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/blog/${post.url}`} target="_blank">
          <Button shape="circle" size='large' type="primary" target="_blank">
            <EyeFilled />
          </Button>
        </Link>,

        <Button type="primary" shape="circle" size='large'>
          <EditFilled />
        </Button>,

        <Button type="danger" shape="circle" size='large'>
          <DeleteFilled />
        </Button>,
      ]}
    >
      <List.Item.Meta title={post.title} />
    </List.Item>
  );
}
