import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreationPhotographe from "../components/CreationPhotographe";
import HeaderDetail from "../components/HeaderDetail";
import Trie from "../components/Trie";
import data from "../data/photographers.json";

function DetailsPhotograph() {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const photographerData = data.photographers.find(
        (photographer) => photographer.id === parseInt(id)
      );
      if (photographerData) {
        setPhotographer(photographerData);
        setMedia(
          data.media.filter(
            (media) => media.photographerId === photographerData.id
          )
        );
      } else {
        setError("Photographe non trouvé");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <HeaderDetail photographer={photographer} />
      <Trie />
      <CreationPhotographe media={media} id={id} />
    </main>
  );
}

export default DetailsPhotograph;
