import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex font-used items-center bg-zinc-50 justify-between px-20 w-screen h-28">
      <div className="font-black text-3xl cursor-pointer">
        Todo<span className="inline-block bg-blue-500 rounded-full h-2 w-2"></span>Board
      </div>

      <ul className="flex gap-10 text-xl text-zinc-500">
        <li className="cursor-pointer" >About</li>
        <li className="cursor-pointer" >Boards</li>
        <li className="cursor-pointer">Todos</li>
      </ul>

      {token ? (
        <button
          onClick={handleLogout}
          className="text-xl border border-red-500 rounded-full px-10 text-red-500 py-1"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/signup")}
          className="text-xl border border-blue-500 rounded-full px-10 text-blue-500 py-1"
        >
          Login
        </button>
      )}

    </div>
  );
}