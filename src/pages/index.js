import { lazy } from "react";

const Exchange = lazy(() => import("./Exchange"));
const Portal = lazy(() => import("./Portal"));
const Referrals = lazy(() => import("./Referrals"));
const Mining = lazy(() => import("./Mining"));
const Airdrop = lazy(() => import("./Airdrop"));
const Earn = lazy(() => import("./Earn"));

export {
    Exchange,
    Portal,
    Referrals,
    Mining,
    Airdrop,
    Earn
};