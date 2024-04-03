import { Outlet } from "react-router-dom"

const Mainlayout = () => (
  <div className={"flex min-h-screen flex-col"}>
    {/* <Header /> */}
    <main className="flex-1">
      <Outlet />
    </main>
    {/* <Footer /> */}
  </div>
)

export default Mainlayout
