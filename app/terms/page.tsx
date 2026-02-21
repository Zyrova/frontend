"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 bg-gradient-to-br from-indigo-500/8 to-purple-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-gradient-to-br from-[#2563EB]/5 to-transparent blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 px-6 py-24 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These terms govern your use of Zyrova's services and create a legal agreement between you and Zyrova.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Zyrova's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the terms of this agreement, 
                you are not authorized to use or access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                Zyrova provides a comprehensive digital creation platform that enables users to create, manage, 
                and deploy online stores and digital experiences. Our services include website building tools, 
                e-commerce functionality, hosting solutions, and related features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Creation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To access certain features of our services, you must create an account. You are responsible 
                    for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Responsibilities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You are responsible for all activities that occur under your account. You must notify us 
                    immediately of any unauthorized use of your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Termination</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to suspend or terminate your account at any time for violations of these terms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these terms. 
                You may not use our services to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Engage in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Plans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer various subscription plans with different features and pricing. You agree to pay all charges 
                    incurred under your account at the prices in effect when such charges are incurred.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Cycle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Subscriptions are billed on a monthly or annual basis, depending on your chosen plan. 
                    Payments are processed automatically at the beginning of each billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Refund Policy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Refunds are available within 30 days of purchase for annual plans and 14 days for monthly plans, 
                    subject to our refund policy terms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Zyrova's Rights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The service and its original content, features, and functionality are owned by Zyrova and 
                    are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">User Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain ownership of content you create using our services. By using our services, you grant 
                    Zyrova a license to use, modify, and display your content as necessary to provide the service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of our services, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to maintain high availability of our services but cannot guarantee 100% uptime. 
                We may perform maintenance or experience technical issues that temporarily affect service availability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for any loss or damage resulting from service interruptions or unavailability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Zyrova shall not be liable for any indirect, 
                incidental, special, or consequential damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may terminate your account at any time by following the account deletion process in your account settings. 
                We may also terminate or suspend your account for violations of these terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the service ceases immediately. All provisions of these terms 
                which by their nature should survive termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. If we make material changes, we will 
                notify you by email or by posting a notice on our site prior to the effective date of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-6 bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl">
                <p className="text-gray-900 font-medium">Email: legal@zyrova.com</p>
                <p className="text-gray-900 font-medium">Response Time: Within 72 hours</p>
              </div>
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
