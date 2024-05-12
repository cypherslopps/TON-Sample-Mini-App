import { lazy } from "react";

const Intro = lazy(() => import("./intro/Intro"));
const Portal = lazy(() => import("./Portal"));

export {
    Intro,
    Portal
};