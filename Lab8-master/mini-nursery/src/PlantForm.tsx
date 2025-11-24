export default function PlantForm() {
  return (
    <form className="card p-4 shadow-sm">
      <h4 className="mb-3">Plant Form</h4>

      {/* Plant Name */}
      <div className="mb-3">
        <label className="form-label">Plant Name</label>
        <input
          type="text"
          className="form-control"
          disabled
          placeholder="Enter plant name"
        />
      </div>

      {/* Scientific Name */}
      <div className="mb-3">
        <label className="form-label">Scientific Name</label>
        <input
          type="text"
          className="form-control"
          disabled
          placeholder="Enter scientific name"
        />
      </div>

      {/* Difficulty */}
      <div className="mb-3">
        <label className="form-label">Difficulty</label>
        <select className="form-select" disabled>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {/* Light */}
      <div className="mb-3">
        <label className="form-label">Light</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Medium</option>
          <option>Bright</option>
        </select>
      </div>

      {/* Water */}
      <div className="mb-3">
        <label className="form-label">Water</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Moderate</option>
          <option>Frequent</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={3}
          disabled
          placeholder="Plant description..."
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 mt-3">
        <button type="button" className="btn btn-success" disabled>
          Add Plant
        </button>
        <button type="button" className="btn btn-secondary" disabled>
          Clear
        </button>
      </div>
    </form>
  )
}
