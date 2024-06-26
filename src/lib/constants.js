import Coin from "../assets/images/coin.png";
import Binance from "../assets/images/binance.svg";
import { Icons } from "../components";

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
        route: "/app/exchange",
        image:  Binance
    },
    {
        title: "Mine",
        route: "/app/mine",
        Icon:  Icons.flower
    },
    {
        title: "Friends",
        route: "/app/referrals",
        Icon:  Icons.usersGroup
    },
    {
        title: "Earn",
        route: "/app/earn",
        Icon:  Icons.coin
    },
    {
        title: "Airdrop",
        route: "/app/airdrop",
        image:  Coin
    }
];