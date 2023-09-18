import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Cultura Digital l</h1>
      <h2>Parcial l - Ética y Programación</h2>
      {/* Para ocultar informacion del iFrame se usa este code
      rel=0&amp;showinfo=0 */}
      <div className="frame-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/videoseries?rel=0&amp;showinfo=0si=QbTsEe-RzLX5ZSwE&amp;list=PLhHbKDQSv0OmRVhRmjlgGh8pLrsL4FlHH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <p className="read-the-docs">
      </p>
    </>
  );
}

export default App;
