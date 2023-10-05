import "./styles.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="body">
      <Navbar />
      <Content />
    </div>
  );
}
