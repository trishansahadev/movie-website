import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        <div class="container m-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar */}
          <Sidebar />
          {/* Movie List */}
          <MovieList />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
