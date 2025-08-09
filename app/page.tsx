'use client';

import Hero from '@/components/Hero';
import WhyBr3ck from '@/components/WhyBreck';
import Offerings from '@/components/Offerings';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <WhyBr3ck />
      <Offerings />
      <HowItWorks />
      <Community />
      <Footer />
    </div>
  );
}