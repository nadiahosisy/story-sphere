import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useNewStory from "./useNewStory";

import "./NewStory.css";

const NewStory = () => {
  const { story, errors, handleChange, handleSubmit} = useNewStory();

  const fields = [
    {
      id: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title here...",
      value: story.title,
      error: errors.title,
    },
    {
      id: "subtitle",
      label: "Subtitle",
      type: "text",
      placeholder: "Enter subtitle here...",
      value: story.subtitle,
      error: errors.subtitle,
    },
    {
      id: "body",
      label: "Body",
      type: "textarea",
      placeholder:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit beatae odit officiis ex iure amet consectetur repellendus eveniet saepe. Sunt?",
      value: story.body,
      error: errors.body,
      class: "story-body",
    },
    {
      id: "footer",
      label: "Footer",
      type: "text",
      placeholder: "Author: Jhonny Appleseed",
      value: story.footer,
      error: errors.footer,
    },
  ];

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = handleSubmit(e)
    if(res) {
      console.log(res)
    };
  };

  return (
    <div className="new-story-container">
      <header className="new-story-header">
        <h2>New Story</h2>
        <Link to="/admin/manageStories" className="back-link">
          Cancel
        </Link>
      </header>
      <div className="new-story-form">
        <div>
          {fields.map((input) => (
            <div key={input.id}>
              <div className={`new-story-input ${input.class}`}>
                <label htmlFor={input.id}>{input.label}</label>
                <textarea
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={(e) => handleChange(e)}
                  value={input.value}
                />
              </div>
              <span className="story-error">{input.error}</span>
            </div>
          ))}
        </div>
          <button type="submit" onClick={handleAdd}>
            Send
          </button>
      </div>
    </div>
  );
};

export default NewStory;
