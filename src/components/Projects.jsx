import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function TiltCard({ title, description, href }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <a href={href || '#'} target={href ? '_blank' : undefined} rel={href ? 'noreferrer noopener' : undefined}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="group relative rounded-xl border border-emerald-400/20 bg-neutral-900/50 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)] transition-transform duration-150"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          {href && <ExternalLink className="h-4 w-4 text-emerald-300" />}
        </div>
        <p className="mt-2 text-sm text-neutral-300">{description}</p>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
        <p className="mt-3 max-w-3xl text-neutral-300">
          Selected work showcasing full-stack development and applied AI.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TiltCard
            title="Travel Planner Website"
            description="Built a full-stack travel site (React+Vite, Spring Boot, MySQL) featuring a Gemini API chatbot fine-tuned for precise user assistance."
          />
          <TiltCard
            title="No-Code Cleaning Agent"
            description="Created a no-code AI agent (Voiceflow, Make) for booking cleaning services with dynamic pricing based on user-provided property details."
            href="https://creator.voiceflow.com/share/6866283c3dd3b7e09dd1f9c9/development"
          />
          <TiltCard
            title="Agricultural Sales Website"
            description="Developed a Django-based e-commerce platform for farmers, featuring user authentication, product management, and a shopping cart."
            href="https://www.linkedin.com/posts/bomma-ganesh-a073552b9_ugcPost-7246917535319613440-Vw1U"
          />
        </div>
      </motion.div>
    </section>
  );
}
