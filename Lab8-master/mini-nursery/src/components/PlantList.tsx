import type { Plant } from '../types'

type PlantListProps = {
  plants: Plant[]
  selectedId: number | null
  onSelect: (p: Plant | null) => void
}

export default function PlantList({ plants, selectedId, onSelect }: PlantListProps) {
  return (
    <div className="list-group">
      {plants.map(plant => (
        <button
          key={plant.id}
          type="button"
          className={`list-group-item list-group-item-action ${selectedId === plant.id ? 'active' : ''}`}
          onClick={() => onSelect(plant)}
        >
          <div className="d-flex w-100 justify-content-between">
            <div>
              <h5 className="mb-1">{plant.name}</h5>
              {plant.scientific && (
                <small className="text-muted"><em>{plant.scientific}</em></small>
              )}
            </div>
            <div className="text-end">
              {plant.rarity && <span className="badge text-bg-warning me-1">{plant.rarity}</span>}
              <span className="badge text-bg-primary">{plant.difficulty}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
