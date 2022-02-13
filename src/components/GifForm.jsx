import React, { useState } from 'react';

export default function GifForm() {
  const [formData, setFormData] = useState({
    gifTitle: '',
  });

  // Handlers
  const submitHanlder = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const changeHanldler = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  return (
    <section className="gif-form">
      <form onSubmit={submitHanlder} autoComplete="off">
        <input
          type="text"
          id="gifTitle"
          name="gifTitle"
          value={formData.gifTitle}
          onChange={changeHanldler}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
