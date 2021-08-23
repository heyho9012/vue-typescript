/* eslint-disable @typescript-eslint/no-namespace */

export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }
  export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
    target: T;
  }
  export interface Mouse<T extends EventTarget> extends MouseEvent {
    target: T;
  }
}

/**
 * [타입의 위계]
 * Event -> target의 속성 정의되어 있음. target 속성 타입과 호환되어야 함.
 * UIEvent
 * InputEvent
 */
