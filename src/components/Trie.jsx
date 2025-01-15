// import React from "react";

function Trie() {
  return (
    <section className="photograph-filter" data-aos="fade-right">
      <label htmlFor="sort">Trier par</label>
      <select id="sort">
        <option value="likes">Popularité</option>
        <option value="dates">Date</option>
        <option value="titles">Titre</option>
      </select>
    </section>
  );
}

Trie.propTypes = {};

export default Trie;
