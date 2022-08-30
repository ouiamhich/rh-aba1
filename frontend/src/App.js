import Home from "./pages/home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Presence } from "./pages/presence/Presence";
import { Departement } from "./pages/departements/Departement";
import { Notes } from "./pages/notes/Notes";
import { Project } from "./pages/projects/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="employees">
              <Route index element={<List />} />
              <Route path=":empid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":empid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="presence">
              <Route index element={<Presence />} />
            </Route>
            <Route path="departements">
              <Route index element={<Departement />} />
            </Route>
            <Route path="notes">
              <Route index element={<Notes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
