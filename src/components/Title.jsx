export default function Title({ react, vite }) {
  return (
    <header className="mb-5">
      <h1 className="text-center">
        <a href="https://react.dev/" target="_blank">
          <img src={react} alt="React Logo" />
        </a>
        <span className="mx-3">Movie Watchlist</span>
        <a href="https://vite.dev/" target="_blank">
          <img src={vite} alt="Vite Logo" />
        </a>
      </h1>
    </header>
  );
}
