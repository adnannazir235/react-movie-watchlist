export default function AddMovies({ addMovies }) {
  return (
    <>
      <h2>Add More Movies!</h2>

      <form onSubmit={addMovies}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Movie name here..."
            autoComplete="true"
            required
          />

          <label htmlFor="name" className="form-label">
            Movie Name?
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            placeholder="Genre name here..."
            required
          />

          <label htmlFor="genre" className="form-label">
            Movie Genre?
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="img"
            name="img"
            placeholder="Image Url here..."
            required
          />

          <label htmlFor="img" className="form-label">
            Movie Poster/Image Url?
          </label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            style={{ height: "150px" }}
            className="form-control"
            id="description"
            name="description"
            placeholder="Movie description here..."
            required
          ></textarea>

          <label htmlFor="description" className="form-label">
            Movie Description?
          </label>
        </div>

        <div className="form-check mb-3 user-select-none">
          <input
            className="form-check-input"
            type="checkbox"
            value="Yes"
            id="watched"
            name="watched"
          />

          <label htmlFor="watched" className="form-label">
            You already Watched it?
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" type="reset">
            Reset Form ▶
          </button>

          <button className="btn btn-primary" type="submit">
            Add Movie ▶
          </button>
        </div>
      </form>
    </>
  );
}
