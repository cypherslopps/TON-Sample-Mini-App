import Coin from "../assets/images/coin.png";
import Binance from "../assets/images/binance.svg";

export const features = [
    {
        title: "Earn per tap",
        titleColor: "text-[#BA7470]",
        image: Coin,
        figure: "+2"
    },
    {
        title: "Coins to level up",
        titleColor: "text-[#6360BB]",
        figure: "25K"
    },
    {
        title: "Profit per hour",
        titleColor: "text-[#80AC89]",
        image: Coin,
        figure: "+894",
    }
];

export const navigationLinks = [
    {
        title: "Exchange",
        route: "/",
        image:  Binance
    },
    {
        title: "Mine",
        route: "/mine",
        image:  Binance
    },
    {
        title: "Friends",
        route: "/referrals",
        image:  Binance
    },
    {
        title: "Earn",
        route: "/earn",
        image:  Binance
    },
    {
        title: "Airdrop",
        route: "/airdrop",
        image:  Binance
    }
];