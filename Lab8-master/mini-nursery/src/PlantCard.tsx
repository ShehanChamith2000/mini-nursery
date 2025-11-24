import type { Plant } from "./types"

type PlantCardProps = {
  plant: Plant
}

export default function PlantCard({ plant }: PlantCardProps) {
  // Map light level → icons
  const lightIcons: Record<Plant["light"], string> = {
    Low: "🌙",
    Medium: "⛅",
    Bright: "☀️",
  }

  // Map water level → icons
  const waterIcons: Record<Plant["water"], string> = {
    Low: "💧",
    Moderate: "💧💧",
    Frequent: "💧💧💧",
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="card-title">{plant.name}</h4>

        {plant.scientific && (
          <p className="text-muted">
            <em>{plant.scientific}</em>
          </p>
        )}

        <p className="card-text">{plant.description}</p>

        <div className="mb-3 d-flex gap-2">
          {/* Difficulty Badge */}
          <span className="badge text-bg-primary">{plant.difficulty}</span>

          {/* Rarity Badge */}
          {plant.rarity && (
            <span className="badge text-bg-warning">{plant.rarity}</span>
          )}
        </div>

        <div className="mb-3">
          <strong>Light:</strong> {lightIcons[plant.light]}
        </div>

        <div className="mb-3">
          <strong>Water:</strong> {waterIcons[plant.water]}
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" disabled>
            View
          </button>
          <button className="btn btn-outline-success" disabled>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
