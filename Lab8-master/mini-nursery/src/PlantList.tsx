import type { Plant } from "./types"

type PlantListProps = {
  plants: Plant[]
  selectedId: number | null
  onSelect: (id: number) => void
}

export default function PlantList({ plants, selectedId, onSelect }: PlantListProps) {
  return (
    <ul className="list-group">
      {plants.map((plant) => (
        <li
          key={plant.id}
          className={`list-group-item d-flex justify-content-between align-items-center 
            ${selectedId === plant.id ? "active" : ""}`}
          onClick={() => onSelect(plant.id)}
          style={{ cursor: "pointer" }}
        >
          <div>
            <strong>{plant.name}</strong>
            {plant.scientific && (
              <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                <em>{plant.scientific}</em>
              </div>
            )}
          </div>

          <div className="d-flex gap-2">
            {/* Difficulty Badge */}
            <span className="badge text-bg-primary">{plant.difficulty}</span>

            {/* Rarity Badge */}
            {plant.rarity && (
              <span className="badge text-bg-warning">{plant.rarity}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
