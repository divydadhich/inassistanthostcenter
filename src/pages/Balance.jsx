import { useNavigate } from "react-router-dom";

export default function Balance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#f5f6fa] overflow-x-hidden">

      {/* HEADER – FULL WIDTH + SAFE AREA */}
      <header className="bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-[390px] h-14 flex items-center justify-between px-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold shrink-0"
          >
            &lt;
          </button>

          <h1 className="text-base font-semibold truncate">
            Balance
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-xl shrink-0"
          >
            ✕
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[390px] px-4 pb-10">

        {/* BALANCE CARD */}
        <div className="mt-4 bg-gradient-to-r from-[#7b5cff] to-[#6a6cff] rounded-2xl p-4 sm:p-6 text-white shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold">$0</h2>
          <p className="mt-2 text-white/80 text-xs sm:text-sm">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">

          {/* Exchange */}
          <button
            onClick={() => alert("Exchange clicked")}
            className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-100 text-lg sm:text-2xl">
              🪙
            </div>
            <p className="mt-2 font-semibold text-xs sm:text-sm">
              Exchange
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 text-center">
              Convert coins
            </p>
          </button>

          {/* Transfer */}
          <button
            onClick={() => alert("Transfer clicked")}
            className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-lg sm:text-2xl">
              ✉️
            </div>
            <p className="mt-2 font-semibold text-xs sm:text-sm">
              Transfer
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 text-center">
              Send money
            </p>
          </button>

          {/* Withdraw */}
          <button
            onClick={() => alert("Withdraw clicked")}
            className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-md active:scale-95 transition"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-indigo-100 text-lg sm:text-2xl">
              🏦
            </div>
            <p className="mt-2 font-semibold text-xs sm:text-sm">
              Withdraw
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 text-center">
              Bank withdrawal
            </p>
          </button>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-md">
            <div className="text-3xl sm:text-4xl mb-3 text-gray-300">
              ⏳
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              No records yet
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 text-center">
              Make your first transfer
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
