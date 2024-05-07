import Navbar from "../../components/Navbar";
import MultiSelection from "./components/MultiSelection";
import SearchBar from "./components/SearchBar";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div style={{ height: 450 }} className="overflow-hidden">
          <img src="https://images.unsplash.com/photo-1605036687969-9c2878c7395b" />
        </div>
        <div className="absolute top-0 w-full px-12 py-8">
          <Navbar />
        </div>
        <div className="absolute m-auto left-0 right-0 -bottom-16 border rounded-lg w-3/4 bg-white shadow-lg">
          <div className="flex flex-row divide-x-2 gap-2 p-2">
            <SearchBar />
          </div>
          <div className="justify-center flex flex-row gap-4 p-2">
            <MultiSelection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
