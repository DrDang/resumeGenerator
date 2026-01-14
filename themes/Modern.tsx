import React from 'react';
import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

export const ModernTheme: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { basics, work, education, skills, projects, certificates, awards } = data;

  // Helper to format location (handles empty region)
  const formatLocation = () => {
    const parts = [basics.location.city, basics.location.region].filter(Boolean);
    return parts.join(', ');
  };

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-row">
      {/* Sidebar */}
      <div className="w-1/3 bg-slate-900 text-white p-8 flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            {basics.name.split(' ').map((n, i) => (
              <span key={i} className="block">{n}</span>
            ))}
          </h1>
          <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
            {basics.label}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>{basics.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} />
            <span>{basics.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <span>{formatLocation()}</span>
          </div>
          {basics.url && (
            <div className="flex items-center gap-3">
              <Globe size={16} />
              <a href={basics.url} className="hover:text-white transition-colors">
                {basics.url.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-sm border-b border-slate-700 pb-2 mb-4">
            Skills
          </h3>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <p className="font-semibold text-slate-200 mb-2">{skill.name}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.keywords.map((kw, kIdx) => (
                    <span key={kIdx} className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Sidebar Style */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-sm border-b border-slate-700 pb-2 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="text-sm">
                <p className="font-bold text-white">{edu.institution}</p>
                <p className="text-slate-400">{edu.area}</p>
                {edu.score && <p className="text-slate-400 text-xs">{edu.score}</p>}
                <p className="text-slate-500 text-xs mt-1">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Sidebar Style */}
        {certificates && certificates.length > 0 && (
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm border-b border-slate-700 pb-2 mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {certificates.map((cert, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-semibold text-slate-200">{cert.name}</p>
                  <p className="text-slate-500 text-xs">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards Sidebar Style */}
        {awards && awards.length > 0 && (
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm border-b border-slate-700 pb-2 mb-4">
              Awards
            </h3>
            <div className="space-y-3">
              {awards.map((award, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-semibold text-slate-200">{award.title}</p>
                  <p className="text-slate-500 text-xs">{award.awarder} • {award.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8 bg-white text-slate-700">
        
        {/* Profile Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-100">
            Profile
          </h2>
          <p className="leading-relaxed text-slate-600">
            {basics.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
            Experience
          </h2>
          <div className="space-y-8">
            {work.map((job, idx) => (
              <div key={idx} className="relative pl-4 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{job.position}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {job.startDate} — {job.endDate || 'Present'}
                  </span>
                </div>
                <div className="text-slate-700 font-medium mb-2">{job.name}</div>
                <p className="text-sm text-slate-600 mb-3 italic">{job.summary}</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600">
                  {job.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects (if any) */}
        {projects && projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-900">{proj.name}</h3>
                    {proj.url && (
                       <a href={proj.url} className="text-blue-600 hover:text-blue-800">
                         <ExternalLink size={14} />
                       </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{proj.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-500">
                    {proj.highlights.slice(0, 2).map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};