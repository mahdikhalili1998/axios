import Delete from "./components/Delete";
import Getdata from "./components/Getdata";
import Patch from "./components/Patch";
import Post from "./components/Post";
import Put from "./components/Put";

function App() {
  return (
    <>
      <Getdata />
      <Post />
      <Delete />
      <Put />
      <Patch />
    </>
  );
}

export default App;
