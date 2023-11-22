import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import OurStory from "./components/ourstory/OurStory";
import Gallery from "./components/gallery/Gallery";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="box-border bg-white antialiased">
      <main className="relative top-0 left-0 right-0">
        <Navbar />
        <Header />
        <div className=" bg-sky-950 w-full h-[0.4rem] shadow-md" />
        <OurStory />
        <Gallery />
        <Details />
        <Footer />
      </main>
    </div>
  );
};

export default App;
