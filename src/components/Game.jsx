import Icons from "./Icons"


const Game = () => {
  return (
    <main>
      <div className="space-y-0.5">
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
    </main>
  )
}

export default Game