import utils from "../node_modules/decentraland-ecs-utils/index"

export class SpawnItem extends Entity {
  private soundEntity = new Entity()

  constructor(model: GLTFShape, transform: Transform, sound: AudioClip, respawnTime: number) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)

    this.soundEntity.addComponent(new AudioSource(sound))
    this.soundEntity.addComponent(new Transform())
    this.soundEntity.getComponent(Transform).position = Camera.instance.position
    engine.addEntity(this.soundEntity)

    /**
     * This trigger allows the player to stand on the same spot and continually
     * pick up an item without having to exit and re-enter the trigger themselves
     */
    this.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerBoxShape(new Vector3(1.5, 3, 1.5), Vector3.Zero()), // We need a separate trigger instance for each item as we'll be modifying it
        0,
        0,
        null,
        null,
        () => {
          log("item collected")
          this.soundEntity.getComponent(AudioSource).playOnce()
          this.getComponent(Transform).scale.setAll(0)
          let origTriggerPos = this.getComponent(utils.TriggerComponent).shape.position.y
          this.getComponent(utils.TriggerComponent).shape.position.y = -100 // Move the trigger so that the player exits and re-enters the trigger

          this.addComponent(
            new utils.Delay(respawnTime, () => {
              this.getComponent(Transform).scale.setAll(1)
              this.getComponent(utils.TriggerComponent).shape.position.y = origTriggerPos
            })
          )
        }
      )
    )
  }
}
