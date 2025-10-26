import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 border-t border-neutral-900/60 bg-neutral-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">Get In Touch</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
          Ready to collaborate or have an opportunity in mind? Let’s connect.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:nsv2190@gmail.com"
            className="group flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-neutral-900/50 p-5 text-neutral-200 transition hover:border-emerald-300/50 hover:bg-neutral-900"
          >
            <Mail className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">Email</div>
              <div className="font-medium">nsv2190@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+919059854218"
            className="group flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-neutral-900/50 p-5 text-neutral-200 transition hover:border-emerald-300/50 hover:bg-neutral-900"
          >
            <Phone className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">Phone</div>
              <div className="font-medium">+91 9059854218</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-neutral-900/50 p-5 text-neutral-200 transition hover:border-emerald-300/50 hover:bg-neutral-900"
          >
            <Linkedin className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">LinkedIn</div>
              <div className="font-medium">linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372</div>
            </div>
          </a>
          <a
            href="https://github.com/saivighnesh2190"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-neutral-900/50 p-5 text-neutral-200 transition hover:border-emerald-300/50 hover:bg-neutral-900"
          >
            <Github className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">GitHub</div>
              <div className="font-medium">github.com/saivighnesh2190</div>
            </div>
          </a>
        </div>
        <div className="mt-12 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} N Sai Vighnesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
