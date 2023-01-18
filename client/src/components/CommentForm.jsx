import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions/postActions";
import Form from "react-bootstrap/Form";

const CommentForm = ({ postId, authorID }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    const newComment = {
      text,
    };
    dispatch(addComment(postId, newComment));
    setText("");
  };

  return (
    <div className="container">
      <Form onSubmit={handleComment}>
        <div className="d-flex">
          <Form.Control
            placeholder="wite a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <i
            className="bi bi-pencil-square btn btn-outline-info mx-2"
            onClick={handleComment}
          ></i>
        </div>
      </Form>
    </div>
  );
};

export default CommentForm;
