import { useNavigate } from "react-router-dom";

export default function InAssistant() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 flex justify-center">
      <div className="w-full max-w-[390px] p-4">

        {/* Profile Card */}
        <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 flex gap-4 items-center shadow-lg">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">IN-Assistant</h2>
            <p className="text-sm text-gray-600">ID: 2482036</p>
            <p className="text-sm text-gray-600">Your Agency ID: 2480459</p>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          {/* Balance */}
          <button
            onClick={() => navigate("/balance")}
            className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-white text-xl">
              💳
            </div>
            <span className="font-semibold text-gray-800">Balance</span>
          </button>

          {/* My Work */}
          <button
            onClick={() => navigate("/work")}
            className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl">
              📊
            </div>
            <span className="font-semibold text-gray-800">My Work</span>
          </button>

          {/* Policy */}
          <button
            onClick={() => navigate("/policy")}
            className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 shadow-lg col-span-2"
          >
            <div className="w-12 h-12 rounded-xl bg-green-400 flex items-center justify-center text-white text-xl">
              📄
            </div>
            <span className="font-semibold text-gray-800">Policy</span>
          </button>

        </div>
      </div>
    </div>
  );
}
