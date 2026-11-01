
"use client";

import { useState } from "react";
import { advance, type ScanState } from "@/lib/subsequence";

const s = "ace";
const t = "abcde";

export default function SubsequenceStepper() {
  const [state, setState] = useState<ScanState>({
    i: 0,
    j: 0,
  });

  const [feedback, setFeedback] = useState("");

  const done =
    state.i === s.length || state.j === t.length;

  function predict(increase: boolean) {
    if (done) return;

    const next = advance(s, t, state);
    const correct = increase === (next.i > state.i);

    if (!correct) {
      setFeedback("Incorrect. Check the next characters.");
      return;
    }

    setState(next);
    setFeedback("Correct — invariant preserved.");
  }

  function reset() {
    setState({ i: 0, j: 0 });
    setFeedback("");
  }

  return (
    <section className="space-y-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">
        Is Subsequence
      </h2>

      <p className="text-slate-400">
        Invariant: i equals the longest prefix of s
        matched in the first j characters of t.
      </p>

      <div className="space-y-2">
        <p>s = &quot;{s}&quot;</p>
        <div className="flex gap-2">
          {Array.from(s).map((ch, idx) => (
            <span
              key={idx}
              className={`rounded p-4 font-mono ${
                idx < state.i
                  ? "bg-emerald-700"
                  : "bg-slate-700"
              }`}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p>t = &quot;{t}&quot;</p>
        <div className="flex gap-2">
          {Array.from(t).map((ch, idx) => (
            <span
              key={idx}
              className={`rounded p-4 font-mono ${
                idx === state.j && !done
                  ? "bg-amber-600"
                  : "bg-slate-700"
              }`}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      <p className="font-mono">
        i = {state.i} | j = {state.j}
      </p>

      {done ? (
        <p className="text-emerald-400">
          {state.i === s.length
            ? "Success: subsequence found."
            : "Finished: not a subsequence."}
        </p>
      ) : (
        <div className="space-y-3">
          <p>Will i increase on the next step?</p>
          <div className="flex gap-3">
            <button
              onClick={() => predict(true)}
              className="rounded bg-emerald-700 px-4 py-2"
            >
              Yes
            </button>

            <button
              onClick={() => predict(false)}
              className="rounded bg-blue-700 px-4 py-2"
            >
              No
            </button>
          </div>
        </div>
      )}

      <p aria-live="polite">{feedback}</p>

      <button
        onClick={reset}
        className="rounded border border-slate-500 px-4 py-2"
      >
        Reset
      </button>
    </section>
  );
}
