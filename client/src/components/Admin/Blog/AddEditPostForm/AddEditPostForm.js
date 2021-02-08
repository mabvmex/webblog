import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  notification,
} from "antd";
import { FontSizeOutlined, GlobalOutlined } from "@ant-design/icons";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { getAccessTokenApi } from "../../../../api/auth";
import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
  const { setIsVisibleModal, setReloadPost, post } = props;
  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);

  return (
    <div className="add-edit-post-form">
      <AddEditForm postData={postData} setPostData={setPostData} post={post} />
    </div>
  );
}

function AddEditForm(props) {
  const { postData, setPostData, post } = props;

  return (
    <Form className="add-edit-post-form" layout="inline">
      <Row gutter={24}>
        <Col span={8}>
          <Input
            prefix={<FontSizeOutlined />}
            placeholder="Titulo"
            //value={}
            //onChan={}
          />
        </Col>

        <Col span={8}>
          <Input
            prefix={<GlobalOutlined />}
            placeholder="url"
            //value={}
            //onChan={}
          />
        </Col>

        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            // showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            //value={}
            //onChange={}
          />
        </Col>
      </Row>


      <Editor
         value=""
         init={{
           height: 400,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
        //  onEditorChange={this.handleEditorChange}
       />
       <Button type='primary' htmlType='submit' className='btn-submit'>
           {post ? "Actualizar post" : 'Crear post'}
       </Button>
    </Form>
  );
}
