import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import CreationPhotographe from "../components/CreationPhotographe";
import HeaderDetail from "../components/HeaderDetail";
import TotalLikes from "../components/TotalLikes";
import Trie from "../components/Trie";
import data from "../data/photographers.json";

function DetailsPhotograph() {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalLikes, setTotalLikes] = useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [sortBy, setSortBy] = useState("likes"); // Gérer l'option de tri ici

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy); // Mettre à jour l'option de tri
  };

  useEffect(() => {
    try {
      const photographerData = data.photographers.find(
        (photographer) => photographer.id === parseInt(id)
      );
      if (photographerData) {
        setPhotographer(photographerData);
        const filteredMedia = data.media.filter(
          (media) => media.photographerId === photographerData.id
        );
        setMedia(filteredMedia);

        // Calculer le total initial des likes
        const initialTotalLikes = filteredMedia.reduce(
          (total, item) => total + item.likes,
          0
        );
        setTotalLikes(initialTotalLikes);
      } else {
        setError("Photographe non trouvé");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, [id]);

  const handleUpdateLikes = (newTotalLikes) => {
    setTotalLikes(newTotalLikes);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <HeaderDetail
        photographer={photographer}
        openModal={() => {
          setModalIsOpen(true);
        }}
      />
      <Trie onSortChange={handleSortChange} />
      <CreationPhotographe
        media={media}
        id={id}
        onUpdateLikes={handleUpdateLikes}
        sortBy={sortBy}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay_modal"
      >
        <header className="modal_header">
          <h2 className="modal_title">
            Contactez-moi
            <br />
            <span className="title_photograph">{photographer.name}</span>
          </h2>
          <button
            className="btn-closes"
            id="close_modal"
            aria-label="close modal"
            onClick={() => setModalIsOpen(false)}
          >
            <img src="assets/icons/close.svg" alt="" aria-hidden="true" />
          </button>
        </header>
        <form className="contact_form">
          <div className="input-group">
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" placeholder="Votre prénom" />
          </div>
          <div className="input-group">
            <label htmlFor="lastname">Nom</label>
            <input type="text" id="lastname" placeholder="Votre nom" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              required
              aria-required="true"
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Votre message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Votre message"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button className="contact_button">Envoyer</button>
        </form>
      </Modal>
      <aside className="photograph-aside">
        <TotalLikes totalLikes={totalLikes} />
        <div>
          <span id="price">{photographer.price}€ / Jour</span>
        </div>
      </aside>
    </main>
  );
}

export default DetailsPhotograph;
