import * as utils from '@dcl/ecs-scene-utils'

export function SpawnItem(pickable_entity_model: GLTFShape,
                          spawn_entity: Entity,
                          transform1: Transform,
                          sound: AudioClip,
                          respawnTime: number) {

  let pickable_entity = new Entity()
  engine.addEntity(pickable_entity)
  pickable_entity.addComponent(pickable_entity_model)
  pickable_entity.addComponent(transform1)

  let soundEntity = new Entity()
  soundEntity.addComponent(new AudioSource(sound))
  soundEntity.addComponent(new Transform())
  engine.addEntity(soundEntity)
  soundEntity.setParent(Attachable.AVATAR)
                          
  spawn_entity.getComponent(Transform).scale.setAll(0)
  


  /**
   * This trigger allows the player to stand on the same spot and continually
   * pick up an item without having to exit and re-enter the trigger themselves
   */
  pickable_entity.addComponent(
    new utils.TriggerComponent(
      new utils.TriggerBoxShape(new Vector3(1.5, 3, 1.5)), // We need a separate trigger instance for each item as we'll be modifying it
      {
        onCameraEnter: () => {
          soundEntity.getComponent(AudioSource).playOnce()
          pickable_entity.getComponent(Transform).scale.setAll(0)
          //const origTriggerPosY = pickable_entity.getComponent(utils.TriggerComponent).shape.position.y
          pickable_entity.getComponent(utils.TriggerComponent).shape.position.y = -100 // Move the trigger so that the player exits and re-enters the trigger
          
          spawn_entity.addComponent(
            new utils.Delay(respawnTime, () => {
              spawn_entity.getComponent(Transform).scale.setAll(1)
            })
          )
        },
      }
    )
  )

  return pickable_entity
}
