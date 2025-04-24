import { useState } from "react";

const PortfolioDashboard = () => {
  // Mock selected templates data
  const [selectedTemplates] = useState([
    {
      id: 1,
      title: "Modern Portfolio",
      description: "A sleek and professional portfolio template.",
      status: "Published",
    },
    {
      id: 2,
      title: "Creative Resume",
      description: "Perfect for designers and creatives.",
      status: "Draft",
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          My Selected Templates
        </h2>
        <p className="text-gray-600 text-sm">
          View and manage the templates you&apos;ve selected or published.
        </p>
      </div>

      {/* Templates List */}
      {selectedTemplates.length === 0 ? (
        <div className="text-gray-500 italic">No templates selected yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-600">
                  {template.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {template.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    template.status === "Published"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {template.status}
                </span>
                <button className="text-blue-600 hover:underline">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioDashboard;
