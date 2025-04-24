const templates = [
  {
    id: 1,
    title: "Modern Developer",
    description: "Clean and responsive portfolio template for devs.",
    image: "https://via.placeholder.com/400x250?text=Modern+Developer",
    price: "Free",
    category: "Developer",
    downloads: 1200,
  },
  {
    id: 2,
    title: "Creative Resume",
    description: "Best for designers with a strong visual identity.",
    image: "https://via.placeholder.com/400x250?text=Creative+Resume",
    price: "$19",
    category: "Designer",
    downloads: 800,
  },
  {
    id: 3,
    title: "Minimal Portfolio",
    description: "Elegant and minimal for clean personal branding.",
    image: "https://via.placeholder.com/400x250?text=Minimal+Portfolio",
    price: "Free",
    category: "General",
    downloads: 500,
  },
  {
    id: 4,
    title: "UX Showcase",
    description: "Perfect for UX portfolios & case study highlights.",
    image: "https://via.placeholder.com/400x250?text=UX+Showcase",
    price: "$25",
    category: "UX/UI",
    downloads: 300,
  },
  {
    id: 5,
    title: "Freelancer Pro",
    description: "Stand out with a stunning freelancer web profile.",
    image: "https://via.placeholder.com/400x250?text=Freelancer+Pro",
    price: "Free",
    category: "Freelancer",
    downloads: 1500,
  },
  // ... replicate and vary for up to 20 templates
];

// Duplicate remaining 15
for (let i = 6; i <= 20; i++) {
  templates.push({
    id: i,
    title: `Template ${i}`,
    description: `This is a sample description for Template ${i}.`,
    image: `https://via.placeholder.com/400x250?text=Template+${i}`,
    price: i % 3 === 0 ? "$29" : "Free",
    category: ["Developer", "Designer", "General"][i % 3],
    downloads: 100 * i,
  });
}

const PortfolioTemplates = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Template Library</h2>
        <p className="text-sm text-gray-600">
          Browse our collection of portfolio templates
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white shadow hover:shadow-lg transition-all rounded-xl overflow-hidden"
          >
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-blue-700">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600">{template.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`px-2 py-1 rounded ${
                    template.price === "Free"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {template.price}
                </span>
                <span className="text-gray-500">
                  {template.downloads}+ downloads
                </span>
              </div>
              <div className="text-xs text-gray-400">
                Category: {template.category}
              </div>
              <button className="mt-3 w-full text-center text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                {template.price === "Free"
                  ? "Use Template"
                  : "Buy for " + template.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTemplates;
