import { useNavigate } from "react-router-dom";

const policyLevels = [
  { level: 1, time: 0, target: 32000, salary: 3 },
  { level: 2, time: 0, target: 70000, salary: 6.5 },
  { level: 3, time: 0, target: 140000, salary: 13 },
  { level: 4, time: 0, target: 310000, salary: 27 },
  { level: 5, time: 0, target: 440000, salary: 40 },
  { level: 6, time: 0, target: 600000, salary: 55 },
  { level: 7, time: 0, target: 800000, salary: 75 },
  { level: 8, time: 0, target: 1000000, salary: 95 },
  { level: 9, time: 0, target: 1300000, salary: 120 },
  { level: 10, time: 0, target: 1600000, salary: 150 },
  { level: 11, time: 0, target: 2000000, salary: 190 },
  { level: 12, time: 0, target: 2400000, salary: 230 },
  { level: 13, time: 0, target: 2800000, salary: 270 },
  { level: 14, time: 0, target: 3200000, salary: 310 },
  { level: 15, time: 0, target: 3600000, salary: 350 },
  { level: 16, time: 0, target: 4000000, salary: 390 },
  { level: 17, time: 0, target: 4500000, salary: 440 },
  { level: 18, time: 0, target: 5000000, salary: 490 },
  { level: 19, time: 0, target: 5600000, salary: 550 },
  { level: 20, time: 0, target: 6200000, salary: 610 },
  { level: 21, time: 0, target: 7000000, salary: 690 },
  { level: 22, time: 0, target: 7800000, salary: 770 },
  { level: 23, time: 0, target: 8600000, salary: 850 },
  { level: 24, time: 0, target: 9500000, salary: 940 },
  { level: 25, time: 0, target: 10500000, salary: 1050 },
];

export default function Policy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

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
            Policy
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
<main className="mx-auto max-w-[390px] px-4 py-4 space-y-3 bg-white">

  {policyLevels.map((item) => (
    <div
      key={item.level}
      className="
        bg-white
        border border-gray-200
        rounded-xl
        p-3
        flex items-center gap-3
      "
    >
      {/* LEVEL BADGE */}
      <div
        className="
          w-12 h-12
          rounded-full
          bg-purple-100
          text-purple-600
          flex items-center justify-center
          text-sm font-semibold
          shrink-0
        "
      >
        L{item.level}
      </div>

      {/* DETAILS */}
      <div className="flex-1 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-[11px] text-gray-500">Time</p>
          <p className="text-sm font-medium text-gray-900">
            {item.time}h
          </p>
        </div>

        <div>
          <p className="text-[11px] text-gray-500">Target</p>
          <p className="text-sm font-medium text-blue-600">
            {item.target.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-gray-500">Salary</p>
          <p className="text-sm font-medium text-green-600">
            ${item.salary}
          </p>
        </div>
      </div>
    </div>
  ))}

</main>

    </div>
  );
}