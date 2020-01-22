import * as Polar from 'polarjs';

export class EditorLayer extends Polar.Layer {

    private manager: Polar.WorldManager;

    public onAttach() {

        this.manager = new Polar.WorldManager(this.eventCallbackFn);
        
        //this.manager.addSingleton(new Polar.TextureLibraryCP([['pram', 'textures/pram.png']]));
		this.manager.addSingleton(new Polar.CameraCP());

		this.manager.addSingleton(<Polar.CameraControllerCP>{
			type: 'Polar:CameraController',
			aspectRatio: 0,
			zoomLevel: 1,
			doRotation: false,
			cameraPosition: Polar.glm.vec3.fromValues(0, 0, 0),
			cameraRotation: 0,
			cameraRotationSpeed: Math.PI / 2
		});

		//this.manager.addSystem(new Polar.TextureLoadSystem());
		this.manager.addSystem(new Polar.CameraControllerSystem());
		this.manager.addSystem(new Polar.RenderSystem());
		
		const entity = this.manager.createEntity();
        entity.addComponent(new Polar.TransformCP(0, 0, 0, 1));
        entity.addComponent(new Polar.OutlineCP(Polar.glm.vec4.fromValues(1.0, 0.0, 0.0, 1.0)));
		//entity.addComponent(new Polar.TextureRefCP('pram', 1, 1));
		this.manager.registerComponents(entity);
    }

    public onDetach() {

    }

    public onUpdate(deltaTime: number) {
        this.manager.onUpdate(deltaTime);
	}
	
	public onEvent(event: Polar.Event) {
		this.manager.onEvent(event);
	}
}