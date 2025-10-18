"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EasyConnects
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                <a
                  href="/"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Home</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                
                <a
                  href="/privacy-policy"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Privacy Policy</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a
                  href="/refund-policy"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Refund Policy</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                
                <a
                  href="/software-principles"
                  className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Software Principles</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a
                  href="/terms-conditions"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Terms & Conditions</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a
                  href="/eula"
                  className="group relative px-4 py-2 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  EULA
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/privacy-policy"
                  className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md text-base font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="/refund-policy"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium"
                >
                  Refund Policy
                </a>
                <a href="/software-principles" className="block px-3 py-2 text-white bg-blue-600 rounded-md text-base font-medium">
                Software Principles
                </a>
                <a
                  href="/terms-conditions"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Software Principles
          </h1>
          <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our software policies are designed to protect users’ rights and ensure a safe, reliable, and respectful experience.
          </p>
          <p className="mt-2 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Effective Date: 20/03/2022
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
           <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">

          <p className="mb-4 leading-relaxed">
            Developing reliable software starts with prioritizing the end-user experience. For over seven years, EasyConnects has been focused on delivering complete PC driver solutions. Our mission is to place the user at the center of every interaction, ensuring smooth installation, safe usage, and ongoing support. From helping first-time users download drivers to providing a transparent refund policy and top-notch customer assistance, we aim to keep PCs running efficiently and safely.
          </p>

          <p className="mb-4 leading-relaxed">
            EasyConnects offers fast, secure, and straightforward access to the latest Windows drivers. Users who register fully with EasyConnects gain complete access to our software, automatic updates, and proactive driver monitoring for plug-and-play devices.
          </p>

          <p className="mb-6 leading-relaxed">
            Here is a breakdown of our core software principles. For any questions, contact our support team at <a href="mailto:support@easyconnects.live" className="text-sky-700 underline">support@easyconnects.live</a>.
          </p>

          {/* Section 1: Easy Uninstallation */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Effortless Uninstallation</h2>
          <p className="mb-4 leading-relaxed">
            EasyConnects ensures that uninstalling the software is straightforward and stress-free. Users can remove it safely without affecting other system functions. Options are available through the Windows Start Menu or Control Panel, and the process is completely free. Step-by-step uninstallation instructions are provided online to guide users.
          </p>

          {/* Section 2: Transparent Software Behavior */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Transparent Software Operations</h2>
          <p className="mb-4 leading-relaxed">
            Our software is designed to clearly communicate its functions. EasyConnects scans for outdated or missing drivers and provides actionable steps to resolve issues efficiently.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>EasyConnects never installs third-party applications without consent.</li>
            <li>System settings remain unchanged unless explicitly approved by the user.</li>
            <li>Driver scans focus only on actual, relevant issues to prevent unnecessary confusion.</li>
            <li>The software’s operations are strictly limited to driver maintenance and system optimization.</li>
            <li>Full-license customers receive a complimentary walkthrough for their first driver installation guided by our support team, accessible via a dedicated phone line during checkout.</li>
          </ul>

          {/* Section 3: Data Privacy */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Data Collection and Privacy</h2>
          <p className="mb-4 leading-relaxed">
            EasyConnects does not collect any personally identifiable information from your computer. Only hardware and software details are gathered to determine required driver updates accurately.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Why we gather device data:</strong> By collecting hardware and software inventory information, EasyConnects ensures our driver recommendations are precise. This data allows our system to continuously refine and standardize updates for all supported devices.
          </p>

          {/* Section 4: Partnerships and Transparency */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Transparent Partnerships</h2>
          <p className="mb-4 leading-relaxed">
            EasyConnects is committed to transparency not only with our users but also with our partners. We build long-lasting relationships with organizations that prioritize user experience and uphold high-quality standards.
          </p>
          <p className="mb-4 leading-relaxed">
            Our app has received certifications from reputable entities, such as AppEsteem, confirming compliance with stringent consumer protection standards in the software monetization industry.
          </p>
        </article>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
