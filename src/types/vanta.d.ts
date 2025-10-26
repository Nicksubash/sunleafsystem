declare module 'vanta/dist/vanta.net.min' {
  interface VantaNetOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    highlightColor?:number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function NET(options: VantaNetOptions): VantaEffect | null;
  export = NET;
}

declare module 'vanta/dist/vanta.globe.min' {
  interface VantaGlobeOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    highlightColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function GLOBE(options: VantaGlobeOptions): VantaEffect | null;
  export = GLOBE;
}
