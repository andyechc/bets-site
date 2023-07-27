import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import profile from "../assets/profile.png";

const Home = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/auth");
  }, [user]);

  return (
    <header className="sticky top-0 left-0 h-10 bg-transparent backdrop-blur-md px-10 shadow">
      <section className="md:max-w-[1000px] w-full h-full m-auto flex items-center justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-indigo-600 ">Logo</h3>
        </div>

        <div>
          <Link
            to="/profile"
            className="flex justify-center items-center gap-2 text-md font-bold text-gray-800"
          >
            <img
              className="w-[30px] object-cover aspect-square rounded-full"
              src={profile}
              alt="Foto de perfil"
            />
            {user && user.username}
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Home;
