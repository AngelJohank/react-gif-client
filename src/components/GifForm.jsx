import React from 'react';

export default function GifForm() {
  const submitHanlder = (event) => {
    event.preventDefault();
  };

  return (
    <section className="gif-form">
      <form onSubmit={submitHanlder} autoComplete="off">
        <input type="text" id="keyword" name="keyword" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
