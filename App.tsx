import React, { useState, useEffect, useRef } from 'react';
import jsyaml from 'js-yaml';
import { ResumeData, ThemeType } from './types';
import { INITIAL_YAML } from './constants';
import { ModernTheme } from './themes/Modern';
import { ClassicTheme } from './themes/Classic';
import { MinimalTheme } from './themes/Minimal';
import { Printer, LayoutTemplate, AlertCircle, FileJson, FileText, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [sourceCode, setSourceCode] = useState<string>(INITIAL_YAML);
  const [parsedData, setParsedData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.MODERN);
  const [format, setFormat] = useState<'yaml' | 'json'>('yaml');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Initial Parse
  useEffect(() => {
    try {
      const data = jsyaml.load(INITIAL_YAML) as ResumeData;
      setParsedData(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Watcher logic: debounce and parse
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        let data: ResumeData;
        if (format === 'yaml') {
          data = jsyaml.load(sourceCode) as ResumeData;
        } else {
          data = JSON.parse(sourceCode);
        }
        
        // Basic schema validation check (very loose for demo)
        if (!data.basics || !data.work) {
          throw new Error("Invalid Resume Schema: Missing 'basics' or 'work' sections.");
        }

        setParsedData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Parsing Error");
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [sourceCode, format]);

  const handlePrint = () => {
    // Set document title to default PDF filename
    const originalTitle = document.title;
    document.title = 'resume';
    window.print();
    // Restore original title after print dialog
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const toggleFormat = () => {
    try {
      if (format === 'yaml') {
        const json = JSON.stringify(parsedData, null, 2);
        setSourceCode(json);
        setFormat('json');
      } else {
        const yaml = jsyaml.dump(parsedData);
        setSourceCode(yaml);
        setFormat('yaml');
      }
    } catch (e) {
      alert("Cannot switch formats while syntax contains errors.");
    }
  };

  const renderTheme = () => {
    if (!parsedData) return null;
    switch (currentTheme) {
      case ThemeType.MODERN: return <ModernTheme data={parsedData} />;
      case ThemeType.CLASSIC: return <ClassicTheme data={parsedData} />;
      case ThemeType.MINIMAL: return <MinimalTheme data={parsedData} />;
      default: return <ModernTheme data={parsedData} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 font-sans">
      
      {/* Editor Pane (Hidden on print) */}
      <div className={`no-print flex flex-col border-r border-gray-800 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-1/2 min-w-[400px]' : 'w-12 bg-gray-900'}`}>
        
        {/* Toolbar */}
        <div className="h-14 bg-slate-950 border-b border-gray-800 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white">
                {isSidebarOpen ? <LayoutTemplate size={20}/> : <LayoutTemplate size={20} className="rotate-90"/>}
             </button>
             {isSidebarOpen && <span className="text-white font-bold tracking-tight">Resume Generator</span>}
          </div>

          {isSidebarOpen && (
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleFormat}
                className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
              >
                {format === 'yaml' ? <FileText size={14} /> : <FileJson size={14} />}
                {format.toUpperCase()}
              </button>
            </div>
          )}
        </div>

        {/* Code Editor Area */}
        {isSidebarOpen && (
          <div className="flex-1 relative bg-[#1e1e1e]">
             <textarea
              className="w-full h-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-6 resize-none focus:outline-none custom-scrollbar leading-relaxed"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              spellCheck={false}
            />
            {/* Status Indicator */}
            <div className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm ${error ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
              {error ? (
                <>
                  <AlertCircle size={14} />
                  <span>Invalid Syntax</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} />
                  <span>Valid</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Preview Pane */}
      <div className={`preview-pane flex-1 flex flex-col h-full bg-gray-100 transition-all duration-300 ${!isSidebarOpen ? 'w-full' : ''}`}>
        
        {/* Preview Toolbar */}
        <div className="no-print h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Theme</span>
            <div className="flex bg-gray-100 p-1 rounded-lg">
              {Object.values(ThemeType).map((t) => (
                <button
                  key={t}
                  onClick={() => setCurrentTheme(t)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${currentTheme === t ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <Printer size={16} />
            Export PDF
          </button>
        </div>

        {/* Resume Canvas */}
        <div className="resume-canvas flex-1 overflow-auto p-8 bg-gray-500/10 custom-scrollbar flex justify-center items-start">
          {error && !parsedData ? (
             <div className="mt-20 text-center">
               <AlertCircle size={48} className="mx-auto text-red-400 mb-4" />
               <h3 className="text-xl font-bold text-gray-700">Unable to Render</h3>
               <p className="text-gray-500 mt-2">{error}</p>
             </div>
          ) : parsedData ? (
            // The Print Container
            <div className="print-container bg-white shadow-2xl print:shadow-none print:w-full w-[210mm] min-h-[297mm] transition-all duration-300 origin-top transform scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.8] xl:scale-100">
              {renderTheme()}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;