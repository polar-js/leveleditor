import * as Polar from 'polarjs';
export declare class EditorLayer extends Polar.Layer {
    private manager;
    onAttach(): void;
    onDetach(): void;
    onUpdate(deltaTime: number): void;
    onEvent(event: Polar.Event): void;
}
