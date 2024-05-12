import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { Portal, Intro } from "./pages"
import { Loader } from "./components";
import useTelegramAPI from "./hooks/useTelegram";

function App() {
  const { TGUserID } = useTelegramAPI();
  console.log(TGUserID);  

  return (
    <main className="py-2.5">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/app/*" element={<Intro />} />
          <Route path="/" element={<Portal />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default App
