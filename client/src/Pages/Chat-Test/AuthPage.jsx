import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    const response = axios
      .post("http://localhost:8000/api/chat", { username: value })
      .then((r) => props.onAuth({ ...response.data, secret: value }))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#0D0C0C] via-[#2C0E23] to-[#0D0C0C] h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
        <p className="text-gray-600 mb-4">Set a username to continue</p>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
