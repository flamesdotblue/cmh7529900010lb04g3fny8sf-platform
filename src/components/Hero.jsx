import React, { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown } from 'lucide-react';

export default function Hero() {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: -18, y: 24 });

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientY / innerHeight - 0.5) * -1; // invert for natural tilt
      const yNorm = (e.clientX / innerWidth - 0.5);
      setRotation({ x: xNorm * 30, y: yNorm * 40 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/10 to-neutral-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
          <Rocket className="h-3.5 w-3.5" />
          Building the future with Web + AI
        </div>
        <h1 className="bg-gradient-to-br from-white to-emerald-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          N Sai Vighnesh
        </h1>
        <p className="mt-3 text-lg text-neutral-300 sm:text-xl">Full Stack Developer & AI Engineer</p>
        <p className="mx-auto mt-5 max-w-3xl text-neutral-300/90">
          Dynamic and results-oriented developer with strong skills in complex problem-solving, analytics, and building scalable web and AI solutions.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => scrollToId('projects')}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500/90 px-5 py-3 text-sm font-medium text-neutral-900 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-300 transition hover:bg-emerald-400"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() => scrollToId('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-neutral-900/60 px-5 py-3 text-sm font-medium text-emerald-300 backdrop-blur transition hover:bg-neutral-800"
          >
            Contact Me
          </button>
        </div>

        {/* Interactive 3D cube with tech labels */}
        <div className="pointer-events-none mt-14 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
          <div
            ref={cubeRef}
            aria-hidden
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
            className="relative mx-auto h-full w-full transition-transform duration-200 ease-out"
          >
            {[
              { face: 'front', z: 56, rot: 'rotateY(0deg)', label: 'Java' },
              { face: 'back', z: -56, rot: 'rotateY(180deg)', label: 'Python' },
              { face: 'right', z: 0, rot: 'rotateY(90deg)', label: 'React' },
              { face: 'left', z: 0, rot: 'rotateY(-90deg)', label: 'Docker' },
              { face: 'top', z: 0, rot: 'rotateX(90deg)', label: 'Spring' },
              { face: 'bottom', z: 0, rot: 'rotateX(-90deg)', label: 'Django' },
            ].map((f, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center rounded-xl border border-emerald-400/40 bg-neutral-900/70 text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur"
                style={{
                  transform:
                    f.face === 'front'
                      ? `translateZ(${f.z}px)`
                      : f.face === 'back'
                      ? `translateZ(${f.z}px)`
                      : `${f.rot} translateZ(56px)`,
                }}
              >
                <span className="pointer-events-none select-none text-sm font-semibold sm:text-base">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
