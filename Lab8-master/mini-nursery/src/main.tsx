import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Import Bootstrap before your own CSS (best practice)
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.tsx'
import type { Plant } from './types.ts'   // <-- import your Plant type

// 2. Create an array of at least 3 plant objects
const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "A hardy plant that thrives on neglect."
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    scientific: "Monstera deliciosa",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Known for its large, holey leaves."
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    scientific: "Ficus lyrata",
    difficulty: "Hard",
    light: "Bright",
    water: "Frequent",
    rarity: "Rare",
    description: "A beautiful but finicky indoor plant."
  }
]

// 3. Pass the plants array to <App />
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App plants={plants} />
  </StrictMode>
)
