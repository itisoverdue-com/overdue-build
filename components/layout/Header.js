import Logo from "./Logo"
import Nav from "./Nav"

export default function Header() {
   return (
      <header>
         <div className="flex justify-between items-center">
            <Logo />
            <Nav />
         </div>
      </header>
   )
}
