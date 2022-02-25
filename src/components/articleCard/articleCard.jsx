import React from "react";
import "./articleCard.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";

const ArticleCard = ({
  id,
  author,
  created_at,
  title,
  body,
  handleDelete,
}) => {
  return (
    <div className="article-card">
      <Link to={`/articles/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span>{author}</span>
      <span>Created at: {created_at}</span>
      <p>{body}</p>
      <section>
        <button
          onClick={() => handleDelete(id)}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete | <AiOutlineDelete />
        </button>
        <button type="button" className="btn btn-light">
          Update | <MdUpdate />
        </button>
      </section>
    </div>
  );
};

export default ArticleCard;
