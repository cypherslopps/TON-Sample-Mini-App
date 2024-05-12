import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Icons from "./Icons"
import Hamster from "../assets/images/hamster.png";
import Bolt from "../assets/images/bolt.png";
import Rocket from "../assets/images/rocket.png";


const Game = ({ setCurrentScore, currentScore }) => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const notifierRef = useRef(null)
  const [clickedState, setClickedState] = useState({
    x: 0,
    y: 0
  })
  const [currentLevelTarget, setCurrentLevelTarget] = useState(300);
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const getCurrentLevelTarget = localStorage.getItem('currentLevelTarget') ? JSON.parse(localStorage.getItem('currentLevelTarget')) : 300;
      const getCurrentLevel = localStorage.getItem('currentLevel') ? JSON.parse(localStorage.getItem('currentLevel')) : 1;

      setCurrentLevelTarget(getCurrentLevelTarget);
      setCurrentLevel(getCurrentLevel);
    }, 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    if (canvas) {
      ctx.current = canvas?.getContext("2d");

      canvas.width = innerWidth - 100;
      canvas.height = 224;

      canvas.addEventListener("click", tapGame);
    }

    return () => canvas?.removeEventListener("click", tapGame);
  }, [tapGame]);

  function tapGame(e) {
    setClickedState(prop => ({
      ...prop,
      x: e.offsetX - 20,
      y: e.offsetY - 20
    }));

    console.log(e.offsetX, e.offsetY, (e.offsetX + 20) - canvasRef.current.width / 2, (e.offsetY + 20) - canvasRef.current.height / 2);

    const player = new Player(e.offsetX - 100, e.offsetY - 100);

    // Show Notifier
    notifierRef.current.classList.remove("opacity-0");
    notifierRef.current.classList.add("opacity-1");
    notifierRef.current.classList.add("fadeOut");

    setTimeout(() => {
      notifierRef.current.classList.remove("opacity-1");
      notifierRef.current.classList.add("opacity-0");
      notifierRef.current.classList.remove("fadeOut");
    }, 1000);

    const score = currentScore + 2;
    setCurrentScore(score);
    localStorage.setItem("currentScore", score);

    if (currentScore >= currentLevelTarget) {
      const level = currentLevel + 1;
      const levelTarget = Math.floor(currentLevelTarget * 1.7);

      setCurrentLevelTarget(levelTarget);
      localStorage.setItem("currentLevelTarget", levelTarget);
      
      setCurrentLevel(level);
      localStorage.setItem("currentLevel", level);
    }

    function animate() {
      ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      player.update();
      requestAnimationFrame(animate);
    }

    animate();
  }

  class Text {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dy = 1;
    }

    draw() {
      ctx.current.font = "20px Inter";
      ctx.current.fillStyle = "white";
      ctx.current.fillText("2X", this.x, this.y);
    }
  }

  class Player {
    constructor(x, y) {
      this.x = (x / 3);
      this.y = (y / 3);
      this.radius = 20;
    }

    draw() {
      ctx.current.beginPath();
      ctx.current.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    }
    
    update() {
      this.draw();
      
      // const text = new Text(this.x, this.y * 1);
      // text.draw();
      
    }
  }

  return (
    <main className="space-y-6 pb-[4rem]">
      {/* Game Header */}
      <div className="w-full space-y-0.5">
        <div className="flex items-center justify-between">
          <span className="text-[.76rem] flex items-center -space-x-0.5 text-white">
            Silver
            <Icons.arrowRight className="w-3 mt-0.5" />
          </span>

          {/* Level */}
          <div className="space-x-1">
            <span className="text-textGray text-[.73rem]">Level</span>
            <span className="text-white text-[.73rem] font-bold">{currentLevel}</span>
          </div>
        </div>
        <div className="progress h-3 rounded-full bg-progress-bg border border-progress-border overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-emerald-500 via-pink-400/80 to-purple-500 rounded-full transition-all duration-500`} 
            style={{
              width: `${(currentScore / currentLevelTarget) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Game */}
      <section className="flex flex-col items-center gap-y-4">
        <div className="flex items-center justify-center bg-purple-600/90 w-[75%] h-56 xl:w-[60%] xl:h-64  rounded-full border-8 border-purple-500 shadow-inner shadow-purple-550 relative z-30 overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full z-40"></canvas>
          <span 
            className="absolute pointer-events-none text-[1.6rem] z-50 font-extrabold"
            ref={notifierRef}
            style={{
              left: `${clickedState.x}%`,
              top: `${clickedState.y}%`
            }}
          >
            2X
          </span>
          <figure className="-z20 absolute top-1/2 left-1/2 w-[45%] pointer-events-none -translate-x-1/2 -translate-y-1/2">
            <img 
              src={Hamster}
              alt="hamster"
              className="w-full object-cover"
            />
          </figure>
        </div>

        <div className="w-11/12 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <img
              src={Bolt}
              alt="bolt"
              className="w-4 h-4"
            />
            <span className="text-white font-medium text-[.82rem]">1500/1500</span>
          </div>

          <div className="flex items-center gap-x-1">
            <img
              src={Rocket}
              alt="bolt"
              className="w-6 h-6"
            />
            <span className="text-white font-medium text-[.85rem]">Boost</span>
          </div>
        </div>
      </section>     
    </main>
  )
}

Game.propTypes = {
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func
}

export default Game