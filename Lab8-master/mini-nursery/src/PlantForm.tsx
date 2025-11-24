import { useState } from 'react'
import type { Plant } from './types'

type PlantFormProps = {
  onAdd?: (plant: Omit<Plant, 'id'>) => void
}

const DEFAULTS = {
  name: '',
  scientific: '',
  difficulty: 'Easy',
  light: 'Medium',
  water: 'Moderate',
  rarity: '',
  description: '',
}

export default function PlantForm({ onAdd }: PlantFormProps) {
  const [name, setName] = useState(DEFAULTS.name)
  const [scientific, setScientific] = useState(DEFAULTS.scientific)
  const [difficulty, setDifficulty] = useState<Plant['difficulty']>(
    DEFAULTS.difficulty as Plant['difficulty']
  )
  const [light, setLight] = useState<Plant['light']>(
    DEFAULTS.light as Plant['light']
  )
  const [water, setWater] = useState<Plant['water']>(
    DEFAULTS.water as Plant['water']
  )
  const [rarity, setRarity] = useState<Plant['rarity'] | ''>(DEFAULTS.rarity as any)
  const [description, setDescription] = useState(DEFAULTS.description)
  const [error, setError] = useState<string | null>(null)

  function resetForm() {
    setName(DEFAULTS.name)
    setScientific(DEFAULTS.scientific)
    setDifficulty(DEFAULTS.difficulty as Plant['difficulty'])
    setLight(DEFAULTS.light as Plant['light'])
    setWater(DEFAULTS.water as Plant['water'])
    setRarity(DEFAULTS.rarity as any)
    setDescription(DEFAULTS.description)
    setError(null)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please provide a plant name.')
      return
    }

    const newPlant: Omit<Plant, 'id'> = {
      name: name.trim(),
      scientific: scientific.trim() || undefined,
      difficulty,
      light,
      water,
      rarity: (rarity as Plant['rarity']) || undefined,
      description: description.trim(),
    }

    if (onAdd) onAdd(newPlant)
    else alert(`Added ${newPlant.name}`)

    resetForm()
  }

  return (
    <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
      <h4 className="mb-3">Add Plant</h4>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter plant name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Scientific name</label>
        <input
          type="text"
          className="form-control"
          value={scientific}
          onChange={e => setScientific(e.target.value)}
          placeholder="Enter scientific name"
        />
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Difficulty</label>
          <select
            className="form-select"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value as Plant['difficulty'])}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Light</label>
          <select
            className="form-select"
            value={light}
            onChange={e => setLight(e.target.value as Plant['light'])}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Bright</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Water</label>
          <select
            className="form-select"
            value={water}
            onChange={e => setWater(e.target.value as Plant['water'])}
          >
            <option>Low</option>
            <option>Moderate</option>
            <option>Frequent</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Rarity</label>
        <select
          className="form-select"
          value={rarity}
          onChange={e => setRarity(e.target.value as Plant['rarity'] | '')}
        >
          <option value="">(none)</option>
          <option>Common</option>
          <option>Uncommon</option>
          <option>Rare</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={3}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Plant description..."
        />
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="submit" className="btn btn-success">
          Add Plant
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={resetForm}
        >
          Clear
        </button>
      </div>
    </form>
  )
}
