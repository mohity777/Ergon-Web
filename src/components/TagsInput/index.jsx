import React, { memo, useEffect, useMemo, useState } from "react";
import CustomInput from "../CustomInput";
import styles from "./TagsInput.module.css";

const TagsInput = ({
  placeholder,
  label,
  onChangeTags,
  valueToSet,
}) => {
  const [tags, setTags] = React.useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    if (valueToSet) {
      const updatedTags = [...valueToSet];
      setTags(updatedTags);
      onChangeTags(updatedTags);
    }
  }, [valueToSet]);

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
      setInput('')
    }
  };

  const tagsList = useMemo(() => (
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
  ),[tags]);

  return (
    <CustomInput
      placeholder={placeholder}
      onKeyUp={(event) => {
        if (event.key == "Enter") {
          addTags(event);
        }
      }}
      onChange={(e) => { setInput(e.target.value) }}
      label={label}
      valueToSet={input}
    >
    {tagsList}
    </CustomInput>
  );
};

export default memo(TagsInput);
