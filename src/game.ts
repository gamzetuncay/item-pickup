import { SpawnItem } from './spawnItem'
import { SpawnBase } from './spawnBase'


// Base scene
const base = new Entity()
base.addComponent(new GLTFShape('models/baseLight.glb'))
engine.addEntity(base)

// Trees
const tree = new Entity()
tree.addComponent(new GLTFShape('models/TreeSycamore_03.glb'))
tree.addComponent(new Transform({position: new Vector3(4, 0, 14),scale: new Vector3(1, 1, 1)}),)
tree.setParent(base)
engine.addEntity(tree)

const tree2 = new Entity()
tree2.addComponent(new GLTFShape('models/TreeFir_02.glb'))
tree2.addComponent(new Transform({position: new Vector3(8, 0, 14),scale: new Vector3(1, 1, 1)}),)
tree2.setParent(base)
engine.addEntity(tree2)

const tree3 = new Entity()
tree3.addComponent(new GLTFShape('models/TreePine_01.glb'))
tree3.addComponent(new Transform({position: new Vector3(12, 0, 14),scale: new Vector3(1, 1, 1)}),)
tree3.setParent(base)
engine.addEntity(tree3)

// Sustainable Objects
const solarPanel = new Entity()
solarPanel.addComponent(new GLTFShape('models/SolarPanel_01.glb'))
solarPanel.addComponent(new Transform({position: new Vector3(4, 0.2, 8),scale: new Vector3(1, 1, 1),rotation: Quaternion.Euler(0, -180, 0)}),)
solarPanel.setParent(base) 
engine.addEntity(solarPanel)

const flower = new Entity()
flower.addComponent(new GLTFShape('models/Flower_03.glb'))
flower.addComponent(new Transform({position: new Vector3(8, 0.2, 8), scale: new Vector3(10, 10, 10)}),)
flower.setParent(base)
engine.addEntity(flower)

const bicycle = new Entity()
bicycle.addComponent(new GLTFShape('models/Bicycle_01.glb'))
bicycle.addComponent(new Transform({position: new Vector3(12, 0.2, 8),scale: new Vector3(1, 1, 1)}),)
bicycle.setParent(base)
engine.addEntity(bicycle)



// Items
const health = SpawnItem(
  new GLTFShape('models/bottle_anim.glb'),
  solarPanel,
  new Transform({position: new Vector3(4, 0.75, 6),}),
  new AudioClip('sounds/medikitPickup.mp3'),
  1 // In milliseconds - 3 second spawn time
)

const ammo = SpawnItem(
  new GLTFShape('models/bottle_anim.glb'),
  flower,
  new Transform({position: new Vector3(8, 0.75, 6),}),
  new AudioClip('sounds/ammoPickup.mp3'),
  1
)

const armor = SpawnItem(
  new GLTFShape('models/bottle_anim.glb'),
  bicycle,
  new Transform({position: new Vector3(12, 0.75, 6),}),
  new AudioClip('sounds/armorPickup.mp3'),
  1
)

// Spawn Bases
const spawnBaseRed = new SpawnBase(
  new GLTFShape('models/spawnBaseRed.glb'),
  new Transform({
    position: new Vector3(4, 0, 6),
  })
)

const spawnBaseGreen = new SpawnBase(
  new GLTFShape('models/spawnBaseGreen.glb'),
  new Transform({
    position: new Vector3(8, 0, 6),
  })
)

const spawnBaseBlue = new SpawnBase(
  new GLTFShape('models/spawnBaseBlue.glb'),
  new Transform({
    position: new Vector3(12, 0, 6),
  })
)
