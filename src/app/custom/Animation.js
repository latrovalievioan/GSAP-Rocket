import gsap from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);
import MotionPathPlugin from "../../../node_modules/gsap/MotionPathPlugin";

export default class Animation {
  constructor(path) {
    this._rocketElement = document.querySelector(".rocket");
    this._backgroundElement = document.querySelector(".background");
    this._svgPath = path;
    this._rocketTween = null;
  }

  start() {
    this._rocketTween = gsap.to(this._rocketElement, {
      motionPath: this._svgPath,
      repeat: -1,
      duration: 10,
      ease: "easeNone",
    });

    this._backgroundElement.addEventListener("click", () => {
      this.stopAnimation();
      this._backgroundElement.removeEventListener("click", () =>
        this.stopAnimation()
      );
      this._backgroundElement.addEventListener("click", () => this.start());
      this._backgroundElement.removeEventListener("click", () => this.start());
    });
  }

  stopAnimation() {
    this._rocketTween.kill();
    this._rocketTween = null;
  }
}
