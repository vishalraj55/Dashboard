export default function StepTracker({ active }) {
  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`px-4 py-2 rounded-full text-sm border ${
            index <= active
              ? "bg-teal-500/15 text-teal-500 border-teal-500"
              : "border-gray-300 dark:border-gray-700 text-gray-500"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}