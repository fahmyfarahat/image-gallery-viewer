export default class FullScreenAPI {
  static enter(element: HTMLDivElement | null): void {
    if ((element as any).requestFullScreen) {
      (element as any).requestFullScreen();
    } else if ((element as any).mozRequestFullScreen) {
      // Mozilla specific
      (element as any).mozRequestFullScreen();
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
  }

  static exit(): void {
    if ((document as any).exitFullscreen) {
      (document as any).exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }

  /**
   * Check if the full screen API available. Devices like the iPhone currently do not support
   * full screen experiences.
   */
  static isEnabled(): boolean {
    return !!document.fullscreenEnabled;
  }
}
