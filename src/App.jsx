import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <Welcome />
      <div className="flex-grow-1">
        <AllTheBooks />
      </div>
      <Footer />
    </div>
  );
}
// ciao

export default App;
