import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Feed from "./pages/Feed";
import { FeedProvider } from "./FeedContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path={["/", "/topalbums", "/topsongs"]}
          render={(props) => (
            <FeedProvider>
              <Feed />
            </FeedProvider>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
