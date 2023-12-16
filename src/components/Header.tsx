import { NavMenu } from './navMenu'

export function Header() {
  return (
    <header className="w-full flex items-center bg-slate-950 h-24 ">
      <div className="w-full flex items-center  justify-around">
        <h1 className="text-slate-50 text-2xl font-bold">DosSantosDev</h1>
        <NavMenu />
      </div>
    </header>
  )
}
