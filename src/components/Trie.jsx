import PropTypes from "prop-types";

function Trie({ onSortChange }) {
  const handleSortChange = (event) => {
    onSortChange(event.target.value); // Passe la valeur sélectionnée au parent
  };

  return (
    <section className="photograph-filter" data-aos="fade-right">
      <label htmlFor="sort">Trier par</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="likes">Popularité</option>
        <option value="dates">Date</option>
        <option value="titles">Titre</option>
      </select>
    </section>
  );
}

Trie.propTypes = {
  onSortChange: PropTypes.func,
};

export default Trie;
