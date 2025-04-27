export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        At TeamPortfolio, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and disclose your personal
        information when you visit our website.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        1. Information We Collect
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We may collect personal information such as your name, email address,
        phone number, and any other information you voluntarily provide when
        contacting us or using our services.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        The information we collect may be used to respond to your inquiries,
        improve our services, and send you updates regarding our products or
        services.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        3. Data Security
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We take reasonable precautions to protect your personal information from
        unauthorized access or disclosure. However, no method of transmission
        over the internet is 100% secure.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        If you have any questions regarding our Privacy Policy, feel free to
        contact us at{" "}
        <a
          href="mailto:hello@teamportfolio.com"
          className="text-indigo-600 dark:text-indigo-400"
        >
          hello@teamportfolio.com
        </a>
        .
      </p>
    </div>
  );
}
