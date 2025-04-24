const PortfolioExplore = () => {
  const templates = [
    {
      title: "Modern Portfolio",
      description: "A sleek and professional portfolio template.",
    },
    {
      title: "Creative Resume",
      description: "Perfect for designers and creatives.",
    },
    {
      title: "Developer Showcase",
      description: "Showcase your skills and projects beautifully.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Explore Templates
        </h2>
        <p className="text-gray-600 text-md">
          Choose from a variety of beautifully designed portfolio templates.
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {template.title}
            </h3>
            <p className="text-gray-600 mt-2">{template.description}</p>
            <button className="mt-4 text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
              Preview
            </button>
          </div>
        ))}
      </div>

      {/* Features */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">App Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Pre-built and customizable portfolio templates</li>
          <li>Easy drag-and-drop editing</li>
          <li>SEO optimized & mobile responsive</li>
          <li>Integrated analytics and contact forms</li>
          <li>Secure & fast hosting</li>
        </ul>
      </section>

      {/* Pricing */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-blue-600 text-lg mb-2">Free</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>✔️ 1 Template</li>
              <li>✔️ Basic customization</li>
              <li>✔️ Portfolio link</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-blue-600 text-lg mb-2">
              Pro - $9/mo
            </h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>✔️ All Templates</li>
              <li>✔️ Advanced editing</li>
              <li>✔️ Custom domain</li>
              <li>✔️ Analytics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-blue-600 text-lg mb-2">
              Team - $29/mo
            </h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>✔️ Everything in Pro</li>
              <li>✔️ Team collaboration</li>
              <li>✔️ Multiple portfolios</li>
              <li>✔️ Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          How Deployment Works
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Select a template and customize it.</li>
          <li>Connect your GitHub or upload assets.</li>
          <li>Preview your portfolio in real-time.</li>
          <li>Click &quot;Deploy&quot; to make it live with a public link.</li>
          <li>Optionally add your custom domain!</li>
        </ol>
      </section>

      {/* More Info / CTA */}
      <section className="text-center py-8">
        <p className="text-gray-600 mb-4">
          Need help choosing the right template or plan?
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default PortfolioExplore;
