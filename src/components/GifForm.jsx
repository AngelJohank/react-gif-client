import React, { useState } from 'react';

export default function GifForm({ searchParams, setSearchParams }) {
  const [formData, setFormData] = useState({
    gifTitle: '',
  });

  // Handlers
  const submitHanlder = (event) => {
    event.preventDefault();
    setSearchParams({ query: formData.gifTitle });
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
        <button type="submit">Buscar gif</button>
      </form>
    </section>
  );
}
