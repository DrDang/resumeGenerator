import React from 'react';
import { ResumeData } from '../types';

export const MinimalTheme: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { basics, work, education, skills, certificates, awards } = data;

  return (
    <div className="w-full h-full bg-white text-black p-10 font-sans">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-light tracking-tighter mb-2">{basics.name}</h1>
        <p className="text-xl text-gray-500 mb-6">{basics.label}</p>
        <div className="flex gap-6 text-sm text-gray-600 font-mono border-t border-gray-100 pt-4">
          <a href={`mailto:${basics.email}`} className="hover:text-black transition">{basics.email}</a>
          <a href={`tel:${basics.phone}`} className="hover:text-black transition">{basics.phone}</a>
          {basics.url && <a href={basics.url} className="hover:text-black transition">{basics.url.replace(/^https?:\/\//, '')}</a>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Column: Skills & Education */}
        <div className="md:col-span-1 space-y-10">
          <section>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Skills</h6>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-sm mb-2">{skill.name}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {skill.keywords.map((kw, k) => <li key={k}>{kw}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Education</h6>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-sm">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.area}</p>
                  {edu.score && <p className="text-xs text-gray-500">{edu.score}</p>}
                  <p className="text-[10px] text-gray-400 mt-1">{edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {certificates && certificates.length > 0 && (
            <section>
              <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Certifications</h6>
              <div className="space-y-3">
                {certificates.map((cert, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards */}
          {awards && awards.length > 0 && (
            <section>
              <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Awards</h6>
              <div className="space-y-3">
                {awards.map((award, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-sm">{award.title}</p>
                    <p className="text-xs text-gray-500">{award.awarder}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Experience */}
        <div className="md:col-span-3">
          <section className="mb-10">
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">About</h6>
            <p className="text-sm leading-7 text-gray-700 max-w-prose">
              {basics.summary}
            </p>
          </section>

          <section>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Experience</h6>
            <div className="space-y-10 border-l border-gray-100 pl-6 ml-1">
              {work.map((job, idx) => (
                <div key={idx} className="relative">
                   <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-black rounded-full"></div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                     <h3 className="text-lg font-medium">{job.position}</h3>
                     <span className="font-mono text-xs text-gray-400">{job.startDate} — {job.endDate || 'Present'}</span>
                   </div>
                   <div className="text-sm font-semibold text-gray-600 mb-3">{job.name}</div>
                   <p className="text-sm text-gray-600 mb-4">{job.summary}</p>
                   <div className="flex flex-wrap gap-2">
                      {job.highlights.map((hl, h) => (
                        <span key={h} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                          {hl}
                        </span>
                      ))}
                   </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};