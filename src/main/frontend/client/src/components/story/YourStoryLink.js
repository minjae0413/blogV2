import React from 'react';
import { Link } from 'react-router-dom';
import icon05 from "../../img/icon05X4.png";
import '../../scss/Story.scss';


const YourStoryLink = ({story,setStory,imagePreview,setImagePreview}) => {
  return (
    <Link to={'/uploadstory'} story={story} setStory={setStory} imagePreview={imagePreview} setImagePreview={setImagePreview}>
      <div className="thumbnail">
        <img src={icon05} alt="" />
      </div>
      <dl>
        <dt>Your story</dt>
        <dd>당신의 스토리를 공유 해주세요.</dd>
      </dl>
    </Link>
  );
};

export default YourStoryLink;
