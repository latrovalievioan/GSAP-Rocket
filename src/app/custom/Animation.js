import gsap from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);
import MotionPathPlugin from "../../../node_modules/gsap/MotionPathPlugin";

export default class Animation {
  constructor(path) {
    this._rocketElement = document.querySelector(".rocket");
    this._backgroundElement = document.querySelector(".background");
    this._svgPath = path;
    this._rocketTween = null;
    this.clicked = false;
  }

  start() {
    this.clicked = false;
    console.log(this.clicked, "start");
    this._rocketTween = gsap.to(this._rocketElement, {
      motionPath: { path: this._svgPath, autoRotate: true },
      repeat: -1,
      duration: 10,
      ease: "easeNone",
    });
  }

  stopAnimation() {
    this._rocketTween.kill();
    this._rocketTween = null;
  }

  listeners() {
    this._backgroundElement.addEventListener("click", () => {
      if (!this.clicked) {
        this.clicked = true;
        this.stopAnimation();
      } else if (this.clicked) {
        this.clicked = false;
        this.start();
      }
    });
  }
}
