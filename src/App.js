import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-white">
      {/* Header */}

      <Header />

      {/* body */}

      <Body />

      {/* footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default App;
