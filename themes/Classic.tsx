import React from 'react';
import { ResumeData } from '../types';

export const ClassicTheme: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { basics, work, education, skills, certificates, awards, publications } = data;

  // Helper to format location (handles empty region)
  const formatLocation = () => {
    const parts = [basics.location.city, basics.location.region].filter(Boolean);
    return parts.join(', ');
  };

  return (
    <div className="w-full h-full bg-white text-gray-900 p-12 font-serif max-w-[210mm] mx-auto">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{basics.name}</h1>
        <p className="text-lg italic text-gray-600 mb-4">{basics.label}</p>
        
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-700">
          <span>{basics.email}</span>
          <span>•</span>
          <span>{basics.phone}</span>
          <span>•</span>
          <span>{formatLocation()}</span>
          {basics.url && (
            <>
              <span>•</span>
              <a href={basics.url} className="underline">{basics.url.replace(/^https?:\/\//, '')}</a>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1">Professional Summary</h2>
        <p className="text-sm leading-relaxed text-justify text-gray-800">
          {basics.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6 experience-section">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Work Experience</h2>
        <div className="space-y-6">
          {work.map((job, idx) => (
            <div key={idx} className="job-entry">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900 text-md">{job.name}</h3>
                <span className="text-sm italic text-gray-600">
                  {job.location} | {job.startDate} – {job.endDate || 'Present'}
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-2">{job.position}</div>
              {job.summary && <p className="text-sm text-gray-800 mb-2">{job.summary}</p>}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-disc list-outside ml-5 text-sm space-y-1 text-gray-700">
                  {job.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Education</h2>
        <div className="space-y-3">
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-baseline">
               <div>
                 <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                 <p className="text-sm text-gray-700 italic">
                   {edu.studyType} in {edu.area}
                   {edu.score && <span className="text-gray-600"> — {edu.score}</span>}
                 </p>
               </div>
               <span className="text-sm text-gray-600">{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Skills</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <span className="font-bold text-gray-900">{skill.name}: </span>
              <span className="text-gray-700">{skill.keywords.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {certificates && certificates.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Certifications</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {certificates.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-xs">{cert.issuer}</p>
                </div>
                <span className="text-gray-500 text-xs">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Awards</h2>
          <div className="space-y-2 text-sm">
            {awards.map((award, idx) => (
              <div key={idx} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-gray-900">{award.title}</span>
                  <span className="text-gray-600"> — {award.awarder}</span>
                </div>
                <span className="text-gray-500 text-xs">{award.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications */}
      {publications && publications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Publications</h2>
          <div className="space-y-2 text-sm">
            {publications.map((pub, idx) => (
              <div key={idx}>
                <span className="font-bold text-gray-900">{pub.name}</span>
                <span className="text-gray-600"> — {pub.publisher}, {pub.releaseDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};