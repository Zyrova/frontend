"use client";

import Header from "@/components/header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 bg-gradient-to-br from-indigo-500/8 to-purple-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-gradient-to-br from-[#2563EB]/5 to-transparent blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 px-6 pt-24 pb-16 sm:px-12 lg:px-16 mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, 
                or contact us for support. This may include your name, email address, and other contact information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also collect information automatically as you navigate through our services, including usage data, 
                device information, and browsing patterns to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Provision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use your information to provide, maintain, and improve our services, including customer support 
                    and personalized experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may contact you with service-related information, updates, and marketing communications 
                    (with your consent).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze usage patterns to understand how our services are used and to develop new features 
                    that better serve our users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your data is encrypted during transmission and stored on secure servers. Access to personal 
                information is restricted to authorized personnel only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We may share information with trusted service providers who assist us in operating our services, 
                conducting our business, or serving our users, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access and Correction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to access and update your personal information at any time through your account settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Portability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can request a copy of your personal information in a structured, commonly used format.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Deletion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may request deletion of your personal information, subject to legal and legitimate business requirements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            
          </div>

          <div className="mt-16 pt-8 border-t-2 border-gray-200/30 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
