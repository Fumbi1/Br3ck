'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, BookOpen, Users, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import Image from 'next/image';

const steps = [
  {
    icon: "IconA.svg",
    title: "Apply & Enroll",
    description: "Join our highly selective program designed to nurture emerging talents. Whether you're new to Web3 or looking to advance your career."
  },
  {
    icon: "Icon-1.svg",
    title: "Immersive Learning",
    description: "Dive into real-world Web3 projects, build dApps, create development, and forge NFTs and more."
  },
  {
    icon: "Frame-1.svg",
    title: "Mentorship & Support",
    description: "Get access to seasoned Web3 professionals who will guide and our mentors. Ask questions and get networking."
  },
  {
    icon: "Icon-2.svg",
    title: "Career Placement",
    description: "Upon completion, we connect you directly with opportunities at global companies. We don't just teach, we place."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-[6.25%] max-w-6xl mx-auto" id='how-we-work'>
      <AnimatedSection className="text-center mb-16">
        <motion.div 
          className="text-sm font-medium text-white tracking-wider mb-4 brightness-[75%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button variant={"outline"}>
          WHY AFRICA?
          </Button>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          How BR3CK Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From application to job placement, BR3CK is built to
          <br />
          transform talent into industry-leading professionals.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <AnimatedSection key={index} delay={index * 0.15}>
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative"
            >
              <Card className="h-[350px] glass- bg-[#FFFFFF33] border-border/50 hover:border-blue-500/30 transition-all duration-300 pt-6">
                <CardHeader>
                  <motion.div
                    className="mb-4 inline-block p-0 rounded-none w-fit"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Image src={step.icon} alt='icon' width={64.8} height={64.8}/>
                  </motion.div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
