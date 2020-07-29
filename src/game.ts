import { SpawnItem } from "./spawnItem"
import { SpawnBase } from "./spawnBase"

// Base scene
const base = new Entity()
base.addComponent(new GLTFShape("models/baseLight.glb"))
engine.addEntity(base)

// Items
const health = new SpawnItem(
  new GLTFShape("models/medikit.glb"),
  new Transform({
    position: new Vector3(4, 0.75, 6),
  }),
  new AudioClip("sounds/medikitPickup.mp3"),
  3000 // In milliseconds - 3 second spawn time
)

const ammo = new SpawnItem(
  new GLTFShape("models/ammo.glb"),
  new Transform({
    position: new Vector3(8, 0.75, 10),
  }),
  new AudioClip("sounds/ammoPickup.mp3"),
  1500
)

const armor = new SpawnItem(
  new GLTFShape("models/armor.glb"),
  new Transform({
    position: new Vector3(12, 0.75, 6),
  }),
  new AudioClip("sounds/armorPickup.mp3"),
  5000
)

// Spawn Bases
const spawnBaseRed = new SpawnBase(
  new GLTFShape("models/spawnBaseRed.glb"),
  new Transform({
    position: new Vector3(4, 0, 6),
  })
)

const spawnBaseGreen = new SpawnBase(
  new GLTFShape("models/spawnBaseGreen.glb"),
  new Transform({
    position: new Vector3(8, 0, 10),
  })
)

const spawnBaseBlue = new SpawnBase(
  new GLTFShape("models/spawnBaseBlue.glb"),
  new Transform({
    position: new Vector3(12, 0, 6),
  })
)
