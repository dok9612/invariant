
import SubsequenceStepper from "@/components/SubsequenceStepper";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold">
          Invariant Lab
        </h1>

        <p className="text-slate-400">
          Learn the invariant. Prove the transition.
          Then write the algorithm.
        </p>

        <SubsequenceStepper />
      </div>
    </main>
  );
}
