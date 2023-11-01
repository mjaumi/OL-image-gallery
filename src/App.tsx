import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import GalleryContextProvider from './context/GalleryContextProvider';

function App() {
  // rendering the web application here
  return (
    <GalleryContextProvider>
      <main className='font-poppins'>
        <Header />
        <Gallery />
        <Footer />
      </main>
    </GalleryContextProvider>
  );
}

export default App;
