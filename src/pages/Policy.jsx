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
    <div className="min-h-screen bg-[#eef2ff] flex justify-center">
      <div className="w-full max-w-[390px]">

      <div className="h-14 px-4 flex items-center justify-between bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
  <button
    onClick={() => navigate(-1)}
    className="text-2xl font-semibold"
  >
    &lt;
  </button>

  <h1 className="text-lg font-semibold">Policy</h1>

  <button
    onClick={() => navigate(-1)}
    className="text-2xl"
  >
    ✕
  </button>
</div>

        {/* LEVEL LIST */}
        <div className="px-4 py-4 space-y-6">
          {policyLevels.map((item) => (
            <div key={item.level}>
              {/* LEVEL TITLE */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-5 rounded bg-purple-600"></div>
                <h2 className="font-semibold text-gray-800">
                  LEVEL:{item.level}
                </h2>
              </div>

              {/* CARD */}
              <div className="bg-blue-50 rounded-2xl px-4 py-3 grid grid-cols-3 text-center text-sm shadow-sm">
                <div>
                  <p className="text-gray-600">Time(Hours)</p>
                  <p className="mt-1 text-emerald-500 font-semibold">
                    {item.time}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Target(Gift Value)</p>
                  <p className="mt-1 text-blue-600 font-semibold">
                    {item.target.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Host(Salary)</p>
                  <p className="mt-1 text-orange-500 font-semibold">
                    {item.salary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
