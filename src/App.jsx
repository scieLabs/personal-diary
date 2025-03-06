import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <CardList />
      </div>
      <Footer />
    </div>
  );
}
export default App;
