import React, { useState } from 'react';

const StoryUploadForm = ({story,setStory,imagePreview,setImagePreview}) => {

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    setStory((prevStory) => ({ ...prevStory, [name]: name === 'image' ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Story submitted:', story);
    setStory({ title: '', content: '', image: null });
    setImagePreview(null);
  };

  return (
    <form className='uploadstory' onSubmit={handleSubmit}>
        <div>
            <label>
                Title:
            </label>
            <input type="text" name="title" value={story.title} onChange={handleChange} />
        </div>
        <div>
            <label>
                Content:
            </label>
            <textarea name="content" value={story.content} onChange={handleChange} />
        </div>
        <div>
            <p className='inline label'>Upload Photo:</p>
            <input type="file" name="image" accept="image/*" onChange={handleChange} id="file" />
        </div>
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
        <div className="t-c submit">
            <button type="submit">Submit</button>
        </div>
    </form>
  );
};

export default StoryUploadForm;
