import { Game, SEO } from "../components";
import { features } from "../lib/constants";
import Coin from "../assets/images/coin.png";

const Home = () => {
  const balance = 10135;

  return (
    <>
        <SEO 
            title="Home"
            description="Sample App Intro"
        />

        <header className="grid grid-cols-[max-content_1fr_max-content] gap-x-1">
          {features.map(({ title, titleColor, image, figure }) => (
            <blockquote
              key={title}
              className="flex flex-col items-center bg-features rounded-md px-[0.3rem] py-1.5"
            >
              <h6 className={`text-[.73rem] font-medium ${titleColor}`}>{title}</h6>
              <div className="flex items-center justify-center gap-x-1">
                {image && (
                  <img 
                    src={image}
                    alt={title}
                    className="w-5 h-5"
                  />
                )}
                <span className="text-sm font-bold">{figure}</span>
              </div>
            </blockquote>  
          ))}
        </header>

        <section className="mt-3.5 space-y-2">
          <div className="flex justify-center items-center gap-x-1">
            <img 
              src={Coin}
              alt="balance"
              className="w-[18%] object-cover"
            />
            <h1 className="text-[1.75rem] font-extrabold text-white">{balance.toLocaleString()}</h1>
          </div>

          {/* Game */}
          <Game />
        </section>
    </>
  )
}

export default Home