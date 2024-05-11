import Icons from "./Icons"
import Hamster from "../assets/images/hamster.png";
import Bolt from "../assets/images/bolt.png";
import Rocket from "../assets/images/rocket.png";
import "../lib/tap-game";

const Game = () => {

  return (
    <main className="space-y-6">
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
            <span className="text-white text-[.73rem] font-bold">2/5</span>
          </div>
        </div>
        <div className="progress h-3 rounded-full bg-progress-bg border border-progress-border overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-r from-emerald-500 via-pink-400/80 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* Game */}
      <section className="flex flex-col items-center gap-y-4">
        <div className="flex items-center justify-center bg-purple-600/90 w-[75%] h-52 rounded-full border-8 border-purple-500 shadow-inner shadow-purple-550 relative">
          <canvas className="w-full h-full"></canvas>
          <figure className="absolute top-1/2 left-1/2 w-[45%] pointer-events-none -translate-x-1/2 -translate-y-1/2">
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

export default Game