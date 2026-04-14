declare module 'gsap/SplitText' {
  interface SplitTextConfig {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    splitClass?: string;
    position?: number;
    absolute?: boolean;
    space?: boolean;
  }

  class SplitText {
    constructor(element: Element | string, config?: SplitTextConfig);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  export { SplitText };
}

declare module 'gsap/ScrollSmoother' {
  interface ScrollSmootherConfig {
    smooth?: number;
    onUpdate?: (self: ScrollSmoother) => void;
    content?: Element | string;
    wrapper?: Element | string;
    autoKill?: boolean;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
    [key: string]: any;
  }

  class ScrollSmoother {
    constructor(config?: ScrollSmootherConfig);
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number, suppressEvents?: boolean): number | ScrollSmoother;
    scrollTo(target: string | Element | number, smooth?: boolean, position?: string): ScrollSmoother;
    refresh(): ScrollSmoother;
    static create(config?: ScrollSmootherConfig): ScrollSmoother;
    static get(instance?: number): ScrollSmoother;
    static refresh(force?: boolean): void;
  }

  export { ScrollSmoother };
}
