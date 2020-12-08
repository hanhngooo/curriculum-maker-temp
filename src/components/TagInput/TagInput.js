import React, { useState, useRef } from "react";
import "./TagInput.css";

const TagInput = (props) => {
  const [tags, setTags] = useState([]);
  let tagInput = useRef(null);

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      props.setFieldValue("studyTags", [...tags, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(i);
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input
            type="text"
            onKeyDown={inputKeyDown}
            ref={(c) => {
              tagInput = c;
            }}
            placeholder="Press enter to add tags"
          />
        </li>
      </ul>
    </div>
  );
};
export default TagInput;
