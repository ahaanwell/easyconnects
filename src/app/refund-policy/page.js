'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function RefundPolicy() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Modern Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
                    : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    NowStart Solution
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-1">
                                <a href="/" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Home</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/privacy-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Privacy Policy</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/refund-policy" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    <span>Refund Policy</span>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                </a>
                                <a
                  href="/software-principles"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Software Principles</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Terms & Conditions</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/eula" className="group relative px-4 py-2 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300">
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
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Home</a>
                                <a href="/privacy-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Privacy Policy</a>
                                <a href="/refund-policy" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md text-base font-medium">Refund Policy</a>
                                <a href="/software-principles" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Software Principles</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Terms & Conditions</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                            Refund Policy
                        </h1>
                        <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our policies are designed to protect your rights and ensure a trustworthy, respectful experience.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Customers may apply for refunds at the RETURNS & EXCHANGES center of NowStart Solution (a wholly owned subsidiary of NowStart Solution) for any legitimate order-related issues.
          </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

                    <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">
          {/* Introduction */}
          <p className="mb-4 leading-relaxed">
            Every customer is valuable to NowStart Solution, and the company strives to ensure that users enjoy its products and services. The functionality of trial versions is limited to help buyers make informed decisions and avoid purchasing incorrect products.
          </p>
          <p className="mb-4 leading-relaxed">
            NowStart Solution offers a "try-before-you-buy" feature with a 14-day money-back guarantee on most products. Refunds are granted only under specified conditions and are unavailable after the guarantee period.
          </p>

          {/* Section: Circumstances of No Refund */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Circumstances of No Refund</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Failure to read the product description before purchase. Refunds are not provided if dissatisfaction arises from misunderstanding the product's features or functions. Exchanges may be allowed if the price difference does not exceed USD $20.</li>
            <li>Refund requests related to credit card fraud or unauthorized payments must be addressed via the card issuer. NowStart Solution cannot cancel processed orders but may provide exchanges for alternative products. Subscription cancellations follow our Terms of Use.</li>
            <li>Delayed registration code delivery within two hours post-purchase. Customers may contact the NowStart Solution Support Center for assistance.</li>
            <li>Purchasing the wrong product immediately followed by acquiring the correct one elsewhere.</li>
            <li>Price differences for products between regions or companies.</li>
            <li>Partial bundle refunds are not possible through our payment processor; a full refund may be provided if a correct product is purchased separately.</li>
            <li>Customer changes their mind post-purchase.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refund requests where customers refuse to assist support staff or provide necessary information to troubleshoot technical issues.</li>
            <li>Orders placed beyond the 14-day guarantee period experiencing technical issues.</li>
          </ul>

          {/* Section: Accepted Circumstances */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Accepted Circumstances</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchase of services like Registration Backup Service (RBS), Download Insurance Service, or Extended Download Service (EDS) without awareness that they can be canceled after purchase. NowStart Solution will assist in recovering costs via the payment platform.</li>
            <li>Exchanging a program by purchasing the correct one, after which the original purchase cost is refunded.</li>
            <li>Duplicate purchases or similar product purchases. NowStart Solution may exchange one product or refund one purchase.</li>
            <li>No response from NowStart Solution Support within 24 hours, registration code not received, and the customer no longer needs the product. Refund will be issued.</li>
            <li>Purchasing alternative software due to technical errors. Product exchange or full refund may be issued.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Problems</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchased software has significant technical issues with no response for 30 days. Customers may receive a refund if they choose not to wait for future upgrades.</li>
          </ul>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Refund Process</h4>
          <p className="mb-4 leading-relaxed">
            Once a refund is approved, the associated license will be deactivated. For downloaded software, the product must be removed from your device. Refunds are issued to the original payment method (credit card, bank account, or PayPal). Processing times may vary, typically 48 to 72 hours.
          </p>
        </article>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
