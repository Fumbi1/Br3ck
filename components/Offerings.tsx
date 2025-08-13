'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import { Button } from './ui/button';

const offerings = [
  {
    title: "Web3 Fundamentals",
    description: "Master the core concepts of blockchain, cryptocurrencies, and decentralized applications.",
    image: "/image.svg",
    category: "Foundation"
  },
  {
    title: "Decentralized Finance (DeFi)",
    description: "Dive into the world of DeFi, exploring lending, borrowing, and yield farming protocols.",
    image: "/image-1.svg",
    category: "Finance"
  },
  {
    title: "Co-Working Hub",
    description: "Collaborate, network, and build in our Web3-focused hub — a space for co-working, hosting events, and creating innovative blockchain products.",
    image: "/image-2.svg",
    category: "Collaboration"
  },
  {
    title: "Crypto Business Development",
    description: "Understand tokenomics, governance models, and how to build sustainable crypto businesses.",
    image: "/image-6.svg",
    category: "Business"
  },
  {
    title: "Web3 Development",
    description: "Master smart contracts, dApps, DeFi protocols, and blockchain security.",
    image: "/image-4.svg",
    category: "Development"
  },
  {
    title: "Creative & Design Skills",
    description: "Learn to create 2D/3D art, game assets, and immersive Web3 visuals.",
    image: "/image-3.svg",
    category: "Design"
  },
  {
    title: "Marketing & Content",
    description: "Build viral campaigns, NFT stories, and powerful brand messaging.",
    image: "/modd.svg",
    category: "Marketing"
  },
  {
    title: "Advanced Tech Tracks",
    description: "Explore AI + Web3, cross-chain tools, and real-world tokenization.",
    image: "/image-7.svg",
    category: "Advanced"
  }
];

export default function Offerings() {
  return (
    <section className="py-24 px-[6.25%] max-w-7xl mx-auto" id='offerings'>
      <AnimatedSection className="text-center mb-16">
        <motion.div
          className="text-sm font-medium text-white tracking-wider mb-4 brightness-[75%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button variant={"outline"}>
            CORE BENEFITS
          </Button>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Our Offerings
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Unlock Africa's Web3 future through world-class education, expert
          <br />
          mentorship, and real opportunities — all in one academy.
        </p>
      </AnimatedSection>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {offerings.map((offering, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="pt-0 h-[407.3px] w-fit max-w-[415px] glass-card border-border/50 hover:border-blue-500/30 transition-all duration-300 group overflow-hidden">

                <div className="relative h-fit bg-gradient-to-br from-blue-900/20 to-blue-600/20 overflow-hidden">
                  <Image src={offering.image} alt='opps!' width={415} height={233}/>
                  <motion.div
                    className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {offering.category}
                  </motion.div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-blue-300 transition-colors duration-300">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    {offering.description}
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
