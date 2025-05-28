import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Title from "./components/Title";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  const initialMovies = [
    {
      title: "Inception",
      img: "https://image.tmdb.org/t/p/w1280/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      description:
        "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
      genre: "Sci-Fi",
      watched: false,
    },
    {
      title: "The Dark Knight",
      img: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      genre: "Action",
      watched: false,
    },
    {
      title: "La La Land",
      img: "https://image.tmdb.org/t/p/w1280/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      description:
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      genre: "Musical",
      watched: false,
    },
    {
      title: "Interstellar",
      img: "https://image.tmdb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      genre: "Sci-Fi",
      watched: false,
    },
  ];

  return (
    <>
      <Title react={reactLogo} vite={viteLogo} />
      <main>
        <Movies movies={initialMovies} />
      </main>
    </>
  );
}

export default App;
