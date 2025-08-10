'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function Community() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id='community'>
      {/* Background Effect */}
      <div className="absolute inset-0 cyber-pattern opacity-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <motion.div
            className="glass-card rounded-3xl p-12 border border-border/50"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className='w-full h-full absolute left-0 top-0 z-[-1]'>
              <Image src={"/comm-img.png"} alt='' fill className='object-cover object-center rounded-3xl'/>
            </div>
            <div className='w-full h-full absolute left-0 top-0 z-[-1]'>
              <Image src={"/Rectangle.png"} alt='' fill className='object-cover object-center rounded-3xl'/>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Join the BR3CK Community
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Start your journey into the world of Web3 and unlock
              <br />
              your potential in the decentralized future.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Button size="lg" className="px-8 py-4 text-lg text-white font-medium bg-blue-600 hover:bg-blue-700 glow-effect">
                Join Our Community
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}