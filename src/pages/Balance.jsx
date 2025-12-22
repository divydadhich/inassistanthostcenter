import { useNavigate } from "react-router-dom";

export default function Balance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex justify-center">
      <div className="w-full max-w-[390px] px-4 pb-10">

        {/* HEADER */}
        <div className="h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl font-semibold"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold">Balance</h1>
        </div>

        {/* BALANCE CARD */}
        <div className="mt-4 bg-gradient-to-r from-[#7b5cff] to-[#6a6cff] rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-4xl font-bold">$0</h2>
          <p className="mt-2 text-white/80 text-sm">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          {/* Exchange */}
          <button
            onClick={() => alert("Exchange clicked")}
            className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-2xl">
              🪙
            </div>
            <p className="mt-2 font-semibold text-sm">Exchange</p>
            <p className="text-xs text-gray-400">Convert coins</p>
          </button>

          {/* Transfer */}
          <button
            onClick={() => alert("Transfer clicked")}
            className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-2xl">
              ✉️
            </div>
            <p className="mt-2 font-semibold text-sm">Transfer</p>
            <p className="text-xs text-gray-400">Send money</p>
          </button>

          {/* Withdraw */}
          <button
            onClick={() => alert("Withdraw clicked")}
            className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-2xl">
              🏦
            </div>
            <p className="mt-2 font-semibold text-sm">Withdraw</p>
            <p className="text-xs text-gray-400">Bank withdrawal</p>
          </button>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-md">
            <div className="text-4xl mb-3 text-gray-300">⏳</div>
            <p className="font-semibold text-gray-700">
              No records yet
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Make your first transfer
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
