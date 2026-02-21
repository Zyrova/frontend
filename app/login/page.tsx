"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 h-96 w-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 bg-gradient-to-br from-indigo-500/8 to-purple-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-gradient-to-br from-[#2563EB]/5 to-transparent blur-[150px] rounded-full" />
        <div className="absolute top-40 right-1/3 h-48 w-48 bg-gradient-to-br from-slate-200/20 to-transparent blur-[80px] rounded-full" />
        <div className="absolute bottom-40 left-1/3 h-56 w-56 bg-gradient-to-br from-gray-100/15 to-transparent blur-[90px] rounded-full" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Login Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden">
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20 pointer-events-none" />
          
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-tr-3xl" />
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-10 pt-4">
            
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                Welcome back
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sign in to your account to continue your journey
              </p>
            </div>

          {/* Form */}
          <div className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-14 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right pt-2">
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-lg">
              <span>Sign In</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="group flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-gray-700 text-sm font-semibold">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Google</span>
              </button>
              <button className="group flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-gray-700 text-sm font-semibold">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-lg">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                Sign up
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
