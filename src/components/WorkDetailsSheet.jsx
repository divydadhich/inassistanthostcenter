import { useEffect, useRef, useState } from "react";

export default function WorkDetailsSheet({ open, onClose }) {
  const startY = useRef(0);
  const currentY = useRef(0);

  const [translateY, setTranslateY] = useState(0);
  const [dragging, setDragging] = useState(false);

  /* 🔒 Lock background scroll */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTranslateY(0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  /* ================= POINTER EVENTS ================= */

  const onPointerDown = (e) => {
    startY.current = e.clientY;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;

    currentY.current = e.clientY;
    const diff = currentY.current - startY.current;

    if (diff > 0) {
      setTranslateY(diff);
    }
  };

  const onPointerUp = () => {
    setDragging(false);

    if (translateY > 120) {
      onClose();
    } else {
      setTranslateY(0);
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* BOTTOM SHEET */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center">
        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: dragging ? "none" : "transform 0.25s ease",
            touchAction: "none",
          }}
          className="w-full max-w-97.5 bg-white rounded-t-3xl p-4"
        >
          {/* DRAG HANDLE */}
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="w-full flex justify-center py-3 cursor-grab active:cursor-grabbing"
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Details</h2>
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
              Settled
            </span>
          </div>

          {/* SUMMARY */}
          <div className="grid grid-cols-2 gap-y-3 text-sm mb-4">
            <p>
              Target:{" "}
              <span className="text-blue-500 font-semibold">32005</span>
            </p>
            <p className="text-right">
              Duration:{" "}
              <span className="text-purple-500 font-semibold">02h40m</span>
            </p>
            <p>
              Target LV:{" "}
              <span className="text-orange-500 font-semibold">1</span>
            </p>
            <p className="text-right">
              Salary:{" "}
              <span className="text-orange-500 font-semibold">$3</span>
            </p>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-3 text-center rounded-xl overflow-hidden font-semibold">
            <div className="bg-gray-100 py-2">Date</div>
            <div className="bg-linear-to-r from-yellow-100 to-orange-200 py-2">
              Duration
            </div>
            <div className="bg-linear-to-r from-emerald-400 to-emerald-600 text-white py-2">
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
