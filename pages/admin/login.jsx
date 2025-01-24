// pages\admin\login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { MdError, MdOutlineCelebration } from "react-icons/md";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { useAdminToken } from "@/state/adminToken";


const AdminLogin = () => {
  const router = useRouter();
  const { setToken } = useAdminToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST", // Request method
        headers: {
          "Content-Type": "application/json", // Indicate that you're sending JSON
        },
        body: JSON.stringify({ username, password }), // Convert the data into JSON string
      });

      if (!response.ok) {
        const errorData = await response.json();
        setAlert({ type: "error", message: errorData.message });
      }
      const data = await response.json();
      setAlert({ type: "success", message: data.message });
      setToken(data.accessToken);
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } catch (err) {
      console.log(err.message);
      
    }
  };

  return (
    <div className="flex h-[100vh] 2xl:h-[80vh] flex-col px-6 lg:px-8 relative">
      {alert.type.length > 0 && (
        <div
          className={`sm:mx-auto w-full sm:max-w-sm border rounded-xl shadow-xl ${
            alert.type === "error" ? "bg-red-800" : "bg-green-600"
          } px-5 py-5 gap-2 flex flex-col items-center justify-center text-center relative top-10`}
        >
          {alert.type === "error" ? (
            <MdError className="text-4xl text-white" />
          ) : (
            <MdOutlineCelebration className="text-4xl text-white" />
          )}
          <p className="text-lg text-white">{alert.message}</p>
          {alert.type === "error" && (
            <LiaTimesCircleSolid
              className="text-lg absolute top-2 right-2 text-red-200 cursor-pointer"
              onClick={() =>
                setAlert({
                  type: "",
                  message: "",
                })
              }
            />
          )}
        </div>
      )}

      <div className="flex flex-col items-center justify-center sm:mx-auto w-full sm:max-w-sm px-6 lg:px-8 relative top-28">
        <div className="">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Admin Login
          </h2>
        </div>
        <div className="mt-10 w-full">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Username:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
