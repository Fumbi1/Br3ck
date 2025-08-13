'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import Image from 'next/image';

const features = [
  {
    icon: "Frame.svg",
    title: `Expert-Led Curriculum`,
    description: "Learn from industry-leading experts with a curriculum designed for the future of Web3."
  },
  {
    icon: "Frame-1.svg",
    title: "Community-Driven Learning",
    description: "Join a vibrant community of learners and mentors, fostering collaborative growth."
  },
  {
    icon: "Frame-2.svg",
    title: "Career-Focused Outcomes",
    description: "Gain practical skills and knowledge to launch a successful career in the Web3 space."
  }
];

export default function WhyBr3ck() {
  return (
    <section className="py-24 px-[6.25%] max-w-7xl mx-auto" id='whybr3ck'>
      <AnimatedSection className="text-center mb-16">
        <motion.div
          className="text-sm font-medium text-white tracking-wider mb-4 brightness-[75%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button variant={'outline'} className='rounded-full'>
            WHY BR3CK?
          </Button>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Empowering African
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Talent in Web3
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          BR3CK provides a comprehensive and immersive learning experience, equipping
          <br />
          you with the tools and network to excel in the decentralized world.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedSection key={index} delay={index * 0.2}>
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="h-[375px] glass-card border-border/50 hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="p-8 text-left">
                  <motion.div
                    className="mb-6 inline-block rounded-none"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Image src={feature.icon} alt='icon' width={65.96} height={65.96} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}