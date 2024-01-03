import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import SavedDataContextProvider from "./context/SavedDataContextProvider";
import { View } from "./components/View";
import PokeDetail from "./components/PokeDetail";
import PokeEdit from "./components/PokeEdit";

const App = () => {
  return (
    <>
      <SavedDataContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<View />} />
              <Route path="detail/:Id" element={<PokeDetail />} />
              <Route path="edit/:Id" element={<PokeEdit />} />
            </Route>

            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </SavedDataContextProvider>
    </>
  );
};

export default App;
