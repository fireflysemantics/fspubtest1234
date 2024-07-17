/**
 *  @category WebComponent
 *
 * Hello World Web Component
 * that renders a greeting.
 */
export declare class HelloWorldComponent extends HTMLElement {
    static get observedAttributes(): string[];
    /**
     * The name to greet
     * @defaultValue World
     */
    name: string | null;
    something: string;
    /**
     * Initializes the name property to `World`.
     */
    constructor();
    /**
     * Sets the component inner
     * html to the greeting.
     */
    connectedCallback(): void;
    attributeChangedCallback(property: keyof HelloWorldComponent, oldValue: string | null, newValue: string | null): void;
}
//# sourceMappingURL=hello-world.component.d.ts.map