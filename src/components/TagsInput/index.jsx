import React from "react";
import SignUpInput from "../SignUpInput";
import styles from "./TagsInput.module.css";

const TagsInput = ({
  placeholder,
  label,
  onChangeTags,
  labelClass,
  inputClass,
  single = false,
  onChange
}) => {
  const [tags, setTags] = React.useState([]);

  const removeTags = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
    onChangeTags(updatedTags);
  };

  const addTags = (event) => {
    if (event.target.value?.trim() !== "") {
      const updatedTags = [...tags, event.target.value?.trim()];
      setTags(updatedTags);
      onChangeTags(updatedTags);
      event.target.value = "";
    }
  };

  return (
    <div>
      <div className={styles.inputView}>
        <h5 className={`${styles.label} ${labelClass}`}>{label}</h5>
        <div className={inputClass}>
          <SignUpInput
            noStyle={true}
            placeholder={placeholder}
            onKeyUp={(event) => {
              if (single) return;
              if (event.key == "Enter") {
                addTags(event);
              }
            }}
            onChange={(e) => {
              onChange && onChange(e)
            }}
          />
        </div>
      </div>
      {single ? (
        <></>
      ) : (
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              <h1 className={styles.tag_title}>{tag}</h1>
              <span
                className={styles.tag_close_icon}
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsInput;
