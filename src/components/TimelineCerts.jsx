import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TimelineCerts() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Experience / Internships</h2>
          <div className="mt-8">
            <ol className="relative border-l border-neutral-800">
              {[
                {
                  date: 'May 2025',
                  title: 'Virtual Internship - Web Development & AI',
                  org: 'EduSkills Foundation',
                },
                {
                  date: 'June 2024',
                  title: 'Social Internship',
                  org: 'Swecha Andhra Pradesh',
                },
                {
                  date: 'Dec 2023',
                  title: 'Project Expo Participant',
                  org: 'KL-CIIE, Koneru Lakshmaiah Education Foundation',
                },
              ].map((item, idx) => (
                <li key={idx} className="mb-10 ml-6">
                  <span className="absolute -left-3 mt-1 h-6 w-6 rounded-full border border-emerald-400/40 bg-neutral-900 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                  <time className="text-xs uppercase tracking-wide text-emerald-300">{item.date}</time>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-neutral-300">{item.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Certifications</h2>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                className="inline-flex items-start gap-2 rounded-lg border border-emerald-400/20 bg-neutral-900/40 p-4 text-emerald-300 transition hover:border-emerald-300/50 hover:bg-neutral-900"
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=635DD10F83AB9C67D5B6AF301E477BF32AE5B89C07809C71753495BFD968EC70"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="font-medium">Oracle Cloud Infrastructure 2025 Certified DevOps Professional</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-start gap-2 rounded-lg border border-emerald-400/20 bg-neutral-900/40 p-4 text-emerald-300 transition hover:border-emerald-300/50 hover:bg-neutral-900"
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4CAAC260134E339096A818E019596AF69A9F76E78BE7E8F422800FB6869F1EC5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="font-medium">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
