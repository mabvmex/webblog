import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Modal from "../../../components/Modal";
import { getPostsApi } from "../../../api/post";
import PostList from "../../../components/Admin/Blog/PostList";
import "./Blog.scss";

function Blog(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, serModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(20, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.post);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor",
        });
      });
    setReloadPosts(false);
  }, [page, reloadPosts]);

  if (!posts) {
    return null
  }

  return (
    <div className="blog">
      <div className="blog__add-post">
        <Button type="primary">Nuevo post</Button>
      </div>

      <PostList posts={posts} />
      <h2> === Paginación ===</h2>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      />
    </div>
  );
}

export default withRouter(Blog);
