export default function WorkDetailsSheet({ open, onClose }) {
    if (!open) return null;
  
    return (
      <>
        {/* BACKDROP */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
  
        {/* BOTTOM SHEET */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
          <div className="w-full max-w-[390px] bg-white rounded-t-3xl p-4 animate-slideUp">
  
            {/* HANDLE */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
  
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Details</h2>
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
                Settled
              </span>
            </div>
  
            {/* SUMMARY */}
            <div className="grid grid-cols-2 gap-y-3 text-sm mb-4">
              <p>Target: <span className="text-blue-500 font-semibold">32005</span></p>
              <p className="text-right">
                Duration: <span className="text-purple-500 font-semibold">02h40m</span>
              </p>
              <p>Target LV: <span className="text-orange-500 font-semibold">1</span></p>
              <p className="text-right">
                Salary: <span className="text-orange-500 font-semibold">$3</span>
              </p>
            </div>
  
            {/* TABLE HEADER */}
            <div className="grid grid-cols-3 text-center rounded-xl overflow-hidden font-semibold">
              <div className="bg-gray-100 py-2">Date</div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-200 py-2">
                Duration
              </div>
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white py-2">
                Target
              </div>
            </div>
  
            {/* ROWS */}
            <div className="divide-y text-sm">
              {[
                { date: "2025-10-26", duration: "02h00m", target: "1" },
                { date: "2025-10-17", duration: "00h10m", target: "0" },
                { date: "2025-10-13", duration: "00h30m", target: "0" },
                { date: "2025-10-06", duration: "0s", target: "32004" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 text-center">
                  <div className="py-3">{row.date}</div>
                  <div className="py-3 bg-orange-50">{row.duration}</div>
                  <div className="py-3 bg-emerald-50 text-emerald-700 font-semibold">
                    {row.target}
                  </div>
                </div>
              ))}
            </div>
  
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="mt-4 w-full py-3 rounded-xl bg-gray-100 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </>
    );
  }
  