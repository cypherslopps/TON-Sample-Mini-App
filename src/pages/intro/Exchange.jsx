import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Game, SEO } from "../../components";
import { features } from "../../lib/constants";
import Coin from "../../assets/images/coin.png";
import { useEffect, useState } from 'react';

const Exchange = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const getCurrentScore = localStorage.getItem('currentScore') ? JSON.parse(localStorage.getItem('currentScore')) : 0;
      setCurrentScore(getCurrentScore);
    }, 100);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  return (
    <>
        <SEO 
            title="Exchange"
            description="Sample App Exchange"
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

        <section className="mt-3 -space-y-1">
          <div className="flex justify-center items-center gap-x-1">
            <img 
              src={Coin}
              alt="balance"
              className="w-[18%] object-cover"
            />
            {isLoading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={50} containerClassName="w-40 h-9 -mt-4" />
              </SkeletonTheme>
            ) : (
              <h1 className="text-[1.75rem] font-extrabold text-white">{currentScore.toLocaleString()}</h1>
            )}
          </div>

          {/* Game */}
          <Game 
            setCurrentScore={setCurrentScore}
            currentScore={currentScore}
          />
        </section>
    </>
  )
}

export default Exchange