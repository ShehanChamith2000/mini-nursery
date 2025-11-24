import { useState } from 'react'
import type { Plant } from './types'
import PlantList from './PlantList'
import PlantCard from './PlantCard'
import PlantForm from './PlantForm'

type AppProps = {
  plants: Plant[]
}

export default function App({ plants }: AppProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [search, setSearch] = useState('') // for UI-only search input

  // Find selected plant to feature
  const selectedPlant = plants.find(p => p.id === selectedId) || plants[0] || null

  return (
    <div className="container mt-4">
      <h1 className="mb-4">My Plant Collection</h1>

      {/* Search input (UI-only) */}
      <div className="mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search plants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          disabled // UI-only: disable or enable as you want
        />
      </div>

      <div className="row">
        {/* LEFT COLUMN: PlantList */}
        <div className="col-md-4">
          <PlantList
            plants={plants}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* RIGHT COLUMN: PlantForm + Featured PlantCard */}
        <div className="col-md-8">
          <PlantForm />

          {selectedPlant && (
            <div className="mt-4">
              <h4>Featured Plant</h4>
              <PlantCard plant={selectedPlant} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
