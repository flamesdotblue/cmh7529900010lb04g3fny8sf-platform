import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Brain, Boxes, Wrench } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SkillPill = ({ label }) => (
  <div className="group relative rounded-lg border border-emerald-400/30 bg-neutral-900/40 p-3 text-sm text-neutral-200 transition hover:border-emerald-300/60 hover:bg-neutral-900">
    <div className="absolute inset-0 -z-0 rounded-lg bg-emerald-400/0 blur-xl transition group-hover:bg-emerald-400/10" />
    <span className="relative z-10">{label}</span>
  </div>
);

export default function AboutSkills() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 md:grid-cols-5"
      >
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
          <p className="mt-4 text-neutral-300">
            Aspiring Full Stack Developer and AI Engineer with a strong foundation in web technologies and artificial intelligence. Proficient in creating responsive applications and integrating intelligent features, such as the Gemini API. Eager to apply strong analytical and problem-solving skills to build innovative solutions. A quick learner passionate about continuous learning at the intersection of web development and AI.
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xl font-semibold text-emerald-300">Skills</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Code className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Front-End</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Cpu className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Back-End</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Java', 'Spring Boot', 'Python', 'Django'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Database className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Databases</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['MySQL', 'PostgreSQL'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Brain className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">AI Tools</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Gemini API', 'Voiceflow', 'Make', 'Relevance AI', 'N8N', 'Genkit'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Boxes className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Languages</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Java', 'Python', 'C', 'C++'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <Wrench className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Tools & IDEs</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['VS Code', 'Git', 'GitHub', 'Eclipse', 'PyCharm', 'Docker', 'Jenkins', 'Tomcat'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
