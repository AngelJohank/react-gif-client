import React, { useState } from 'react';
import './GifForm.css';

export default function GifForm() {
  // Hooks
  const [formData, setFormData] = useState({
    gifTitle: '',
  });

  // Handlers
  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section>
      <form onSubmit={HandleFormSubmit} autoComplete="off">
        <label htmlFor="gifTitle">Search a gif</label>
        <input type="text" id="gifTitle" name="gifTitle" onInput={handleForm} />
        <button className="btn-submit" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
