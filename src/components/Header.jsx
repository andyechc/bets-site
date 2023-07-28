import { Link } from "react-router-dom"

const Header = ({user}) => {
  return (
    <header className="sticky top-0 left-0 h-10 bg-transparent backdrop-blur-md px-10 shadow">
      <section className="md:max-w-[1000px] w-full h-full m-auto flex items-center justify-between">
        <h3 className="text-xl font-extrabold text-indigo-600 ">Logo</h3>
      
        <Link
          to="/profile"
          className="flex justify-center items-center gap-2 text-md font-bold text-gray-800"
        >
          <img
            className="w-[30px] object-cover aspect-square rounded-full"
            src={user && user.img}
            alt="Foto de perfil"
          />
        </Link>
      </section>
    </header>
  )
}

export default Header;