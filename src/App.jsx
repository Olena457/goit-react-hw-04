import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchUnsplash } from './apiService/photos';

function App() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async searchQuery => {
    setQuery(searchQuery);
    setError(null);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const openModal = image => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const itemsPerPage = 15;
  useEffect(() => {
    if (!query) return;
    async function getImages() {
      try {
        setLoading(true);
        const response = await fetchUnsplash({
          query,
          page,
          itemsPerPage,
        });
        const images = response.data.results;
        setImages(prevImages => [...prevImages, ...images]);
        setHasMore(response.data.total_pages > page);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar submit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {loading && <p>Loading data, please wait...</p>}
      {hasMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {modalImage && (
        <ImageModal
          onSelect={setModalImage}
          isOpen={!!modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}

      {images.map(image => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.slug}
          onClick={() => {
            setModalImage(image.urls.regular);
            openModal(image.urls.regular);
          }}
        />
      ))}
    </>
  );
}

export default App;
