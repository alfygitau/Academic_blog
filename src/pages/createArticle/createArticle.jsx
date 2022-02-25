import React, { useState } from "react";
import "./createArticle.css";
import { DatePicker } from "rsuite";
import { Checkbox, CheckboxGroup } from "rsuite";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(new Date());
  const [reactions, setReactions] = useState(0);
  const [tags, setTags] = useState([]);

  const handleCheckboxChange = (value) => {
    setTags(value);
  };


  const data = { author, title, body, date, reactions, tags };
  console.log("data", data);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("submit initiated");
    e.preventDefault();
    await axios
      .post("http://localhost:8000/articles", {
        author,
        title,
        body,
        created_at: date,
        reactions,
        tags,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/articles");
      });
  };

  return (
    <div className="create_article_container">
        <h6>Create an article by filling in the fields</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            This field is required
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            This field is required
          </div>
        </div>
        <div className="datepicker">
          <h6>Date Created</h6>
          <DatePicker
            value={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            placeholder="Leave an article here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div id="emailHelp" className="form-text">
            This field is required
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={reactions}
            onChange={(e) => setReactions(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            This field is required
          </div>
        </div>
        <div>
          <div>
            <h6>Tags</h6>
            <CheckboxGroup
              inline
              name="checkboxList"
              value={tags}
              onChange={handleCheckboxChange}
            >
              <Checkbox value="Crime">Crime</Checkbox>
              <Checkbox value="Love">Love</Checkbox>
              <Checkbox value="Classic">Classic</Checkbox>
              <Checkbox value="Mystery">Mystery</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
