import React from "react";
import "./articleCard.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";

const ArticleCard = ({ id, author, created_at, title, body, handleDelete }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <span>{author}</span>
      <span>{created_at}</span>
      <p>{body}</p>
      <section>
        <button onClick={()=>handleDelete(id)} type="button" className="btn btn-outline-danger">
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
