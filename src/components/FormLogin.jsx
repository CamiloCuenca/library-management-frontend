import { useNavigate } from "react-router-dom";

export function FormLogin () {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Añadir lógica de autenticación aquí
    navigate("/home");
  };

  const handleSignup = (e) => {
    navigate("/Signup")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-library-bg bg-cover bg-no-repeat bg-center">
      <div className="absolute top-0 left-0 w-full p-8 bg-mangue-500 bg-opacity-60 backdrop-blur-md rounded-none shadow-lg">
        <h1 className="font-books text-white text-center text-6xl md:text-9xl">Library Management System</h1>
      </div>

      <div className="relative flex flex-col rounded-2xl bg-white bg-opacity-90 shadow-lg p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-serif font-bold text-2xl text-mangue-600 mb-2">
            Welcome to Library Management
          </h1>
          <h3 className="text-mangue-500">Enter your details to register</h3>
        </div>

        <form  className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer h-11 w-full rounded-md border border-mangue-300 bg-transparent px-3 py-3 text-sm text-mangue-700 placeholder-transparent focus:border-mangue-600 focus:outline-none"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-3.5 text-xs text-mangue-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-mangue-300 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-mangue-600"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer h-11 w-full rounded-md border border-mangue-300 bg-transparent px-3 py-3 text-sm text-mangue-700 placeholder-transparent focus:border-mangue-600 focus:outline-none"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3.5 text-xs text-mangue-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-mangue-300 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-mangue-600"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer h-11 w-full rounded-md border border-mangue-300 bg-transparent px-3 py-3 text-sm text-mangue-700 placeholder-transparent focus:border-mangue-600 focus:outline-none"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-3.5 text-xs text-mangue-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-mangue-300 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-mangue-600"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="mt-6 w-full bg-mangue-500 text-white py-2 rounded-full transition-colors duration-300 hover:bg-mangue-600 focus:outline-none">
            Login
          </button>

          <button
          type="submit"
          onClick={handleSignup}
          className="mt-6 w-full bg-mangue-500 text-white py-2 rounded-full transition-colors duration-300 hover:bg-mangue-600 focus:outline-none">
            Signup
          </button>

        </form>
      </div>
    </div>
  );
}
