'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EULA() {
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
            {/* Navigation */}
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
                                    EasyConnects
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-1">
                                <a href="/" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Home
                                </a>
                                <a href="/privacy-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Privacy Policy
                                </a>
                                <a href="/refund-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Refund Policy
                                </a>
                                <a
                  href="/software-principles"
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Software Principles</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Terms & Conditions
                                </a>
                                <a href="/eula" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    EULA
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
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

                    {/* Mobile Nav */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                                <a href="/privacy-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy Policy</a>
                                <a href="/refund-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Refund Policy</a>
                                <a href="/software-principles" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Software Principles</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms & Conditions</a>
                                <a href="/eula" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md">EULA</a>
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
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">End User License Agreement (EULA)</h1>
                    <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            This agreement outlines your rights and responsibilities when using EasyConnects software. Please read carefully to ensure proper use.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            By using our software, you acknowledge and accept these terms, which are designed to protect both your interests and those of EasyConnects.
          </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                    <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">End User License Agreement</h2>

          <p className="mb-4 leading-relaxed">
            Upon proceeding, a system scan will start automatically. You may continue other tasks while the scan runs, but it cannot be interrupted once initiated.
          </p>

          <p className="mb-4 leading-relaxed">
            Before installing or accessing the EasyConnects software, including any related files, media, or documentation (collectively referred to as the “Software”), you must accept this agreement. By clicking “Accept,” installing, or using the Software, you agree to be legally bound by these terms. This agreement constitutes the full understanding between you and EasyConnects and supersedes any prior communications regarding the Software. If you do not agree, do not install or use the Software.
          </p>

          {/* Section 1 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 1. Ownership of Intellectual Property</h3>
          <p className="mb-4 leading-relaxed">
            The Software is protected by copyright, trademarks, and other intellectual property laws. All rights, title, and interest in the Software are owned exclusively by EasyConnects, located at 14 West Second Street, Suite 108, Upland, CA 91786. Third-party content included or accessible through the Software remains the property of the respective owner. This agreement does not grant you rights to such third-party content. All rights not expressly granted are reserved by EasyConnects. The Software is licensed, not sold.
          </p>

          {/* Section 2 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 2. License Terms and Restrictions</h3>
          <p className="mb-4 leading-relaxed">
            Subject to compliance with this agreement, EasyConnects grants you a limited, non-transferable, non-exclusive license to install and use the Software on a single device. You may use the Software for personal or internal business purposes only. A single backup copy may be made for archival purposes and may only be used when the original is unavailable. You may not remove or alter copyright notices, share the Software, sublicense it, rent, or lease it. Reverse engineering, decompiling, or disassembling is prohibited except where explicitly allowed by law. Updates or supplementary components provided by EasyConnects are also subject to this agreement.
          </p>

          {/* Section 3 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 3. Limited Warranty</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnects guarantees that the Software will operate substantially as described in the accompanying documentation for thirty (30) days after installation (“Warranty Period”), provided the issue is reported within this timeframe. This warranty does not cover misuse, accidents, or unauthorized modifications. Remedies include repair, replacement, or refund of the purchase price, at EasyConnects’s discretion.
          </p>

          {/* Section 4 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 4. Disclaimer of Additional Warranties</h3>
          <p className="mb-4 leading-relaxed">
            The Software is provided “as is” and “as available.” Except for the limited warranty above, EasyConnects disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. EasyConnects does not guarantee uninterrupted or error-free operation. Users assume all risks associated with performance and quality of the Software.
          </p>

          {/* Section 5 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 5. Limitation of Damages</h3>
          <p className="mb-4 leading-relaxed">
            To the extent permitted by law, EasyConnects is not liable for indirect, incidental, consequential, or punitive damages arising from your use of the Software, including lost profits or data. Some jurisdictions do not allow exclusion of such damages, so limitations may not apply in all cases.
          </p>

          {/* Section 6 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 6. Maximum Liability</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnects’s total liability for any claim related to the Software will not exceed the amount you paid for the Software. This limitation applies regardless of legal theory, whether in contract, tort, or otherwise.
          </p>

          {/* Section 7 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 7. Export Compliance</h3>
          <p className="mb-4 leading-relaxed">
            You must comply with all U.S. export laws. You agree not to export or re-export the Software to prohibited countries, persons, or entities. You represent that you are not restricted from receiving the Software under these laws.
          </p>

          {/* Section 8 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 8. Taxes</h3>
          <p className="mb-4 leading-relaxed">
            You are responsible for any applicable taxes related to your acquisition or use of the Software, excluding taxes based on EasyConnects’s income.
          </p>

          {/* Section 9 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 9. Government End Users</h3>
          <p className="mb-4 leading-relaxed">
            If acquired by the U.S. Government, the Software is provided with “Restricted Rights” as defined under applicable statutes and regulations. Use, reproduction, or disclosure is subject to government contract provisions.
          </p>

          {/* Section 10 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 10. Termination</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnects may terminate this agreement immediately if you fail to comply with any term. Upon termination, you must delete all copies of the Software and cease use.
          </p>

          {/* Section 11 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 11. Governing Law</h3>
          <p className="mb-4 leading-relaxed">
            For U.S. users, this agreement is governed by California law. For non-U.S. users, Hong Kong law applies. If any provision is invalid, the remaining terms remain in effect. Amendments must be in writing and signed by EasyConnects.
          </p>

          {/* Section 12 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 12. Dispute Resolution</h3>
          <p className="mb-4 leading-relaxed">
            Most issues can be resolved through EasyConnects support. If unresolved, disputes may proceed to informal notice, mediation, or arbitration. Terms apply to all related parties, including affiliates.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Claim Notification</h4>
          <p className="mb-4 leading-relaxed">
            Send written notice to EasyConnects including your details and the Software in question: <a href="mailto:support@easyconnects.live" className="text-sky-700 underline">support@easyconnects.live</a>. The purpose is to attempt informal resolution.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Mediation</h4>
          <p className="mb-4 leading-relaxed">
            Mediation is voluntary and non-binding. For U.S. users, mediation can be conducted via JAMS or AAA. For international users, contact EasyConnects.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Arbitration</h4>
          <p className="mb-4 leading-relaxed">
            U.S. users may opt for binding arbitration rather than court action. Arbitration is individual, confidential, and final, subject to FAA rules.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Opting Out</h4>
          <p className="mb-4 leading-relaxed">
            You may reject arbitration by emailing EasyConnects within 30 days of Software acquisition: <a href="mailto:support@easyconnects.live" className="text-sky-700 underline">support@easyconnects.live</a>. Include your name, date, and license info. Opt-out does not affect other rights.
          </p>
        </article>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
