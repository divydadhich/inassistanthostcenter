import { useNavigate } from "react-router-dom";

export default function InAssistant() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* HEADER – FULL WIDTH */}
      <header className="bg-linear-to-b from-[#161a3a] to-[#1e2352] text-white pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-97.5 h-14 flex items-center justify-between px-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold shrink-0"
          >
            &lt;
          </button>

          <h1 className="text-base font-semibold truncate">
            Host Center
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
      <main className="mx-auto max-w-97.5 px-4 py-4">

        {/* PROFILE CARD */}
        <div className="
          bg-white/70
          backdrop-blur-xl
          rounded-2xl
          p-4
          flex
          gap-3
          items-center
          shadow-lg
        ">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl shrink-0">
            👤
          </div>

          {/* Text */}
          <div className="min-w-0">
            <h2 className="text-base font-bold text-gray-800 truncate">
              IN-Assistant
            </h2>
            <p className="text-xs text-gray-600 truncate">
              ID: 2482036
            </p>
            <p className="text-xs text-gray-600 truncate">
              Your Agency ID: 2480459
            </p>
          </div>
        </div>

        {/* BUTTONS GRID */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          {/* Balance */}
          <button
            onClick={() => navigate("/balance")}
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-2xl
              p-3
              flex
              items-center
              gap-3
              shadow-lg
              active:scale-95
            "
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-white text-lg shrink-0">
              💳
            </div>
            <span className="text-sm font-semibold text-gray-800 truncate">
              Balance
            </span>
          </button>

          {/* My Work */}
          <button
            onClick={() => navigate("/work")}
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-2xl
              p-3
              flex
              items-center
              gap-3
              shadow-lg
              active:scale-95
            "
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-lg shrink-0">
              📊
            </div>
            <span className="text-sm font-semibold text-gray-800 truncate">
              My Work
            </span>
          </button>

          {/* Policy – FULL WIDTH */}
          <button
            onClick={() => navigate("/policy")}
            className="
              col-span-2
              bg-white/70
              backdrop-blur-xl
              rounded-2xl
              p-3
              flex
              items-center
              gap-3
              shadow-lg
              active:scale-95
            "
          >
            <div className="w-10 h-10 rounded-xl bg-green-400 flex items-center justify-center text-white text-lg shrink-0">
              📄
            </div>
            <span className="text-sm font-semibold text-gray-800 truncate">
              Policy
            </span>
          </button>

        </div>
      </main>
    </div>
  );
}
