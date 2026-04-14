declare module 'gsap-trial/SplitText' {
  import { gsap } from 'gsap';
  
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

declare module 'gsap-trial/ScrollSmoother' {
  import { gsap } from 'gsap';
  
  interface ScrollSmootherConfig {
    smooth?: number;
    onUpdate?: (self: ScrollSmoother) => void;
    [key: string]: any;
  }

  class ScrollSmoother {
    constructor(config?: ScrollSmootherConfig);
    paused(value?: boolean): boolean | ScrollSmoother;
    static create(config?: ScrollSmootherConfig): ScrollSmoother;
  }

  export { ScrollSmoother };
}
