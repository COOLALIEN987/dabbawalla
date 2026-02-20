import { useState } from 'react';
import { IndiaMap } from './components/dashboard/IndiaMap';
import { KPICards } from './components/dashboard/KPICards';
import { DemandCharts } from './components/dashboard/DemandCharts';
import { ExecutiveSummary } from './components/dashboard/ExecutiveSummary';
import { Button } from './components/ui/button';
import { regionsData } from './data/mockData';
import { DownloadCloud, ExternalLink, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedState, setSelectedState] = useState<string>("Maharashtra");
  const data = regionsData[selectedState];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-bold">
              HL
            </div>
            <h1 className="text-lg font-semibold hidden sm:block tracking-tight text-slate-900">
              Dabbawala Metro Expansion Initiative
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex gap-2 border bg-white border-slate-200 text-slate-600 hover:bg-slate-50" onClick={() => window.open(data.sourceMaterialUrl, '_blank')}>
              <ExternalLink className="h-4 w-4" />
              Source Material
            </Button>
            <Button className="gap-2 shadow-sm" onClick={() => alert('Downloading PDF Report...')}>
              <DownloadCloud className="h-4 w-4" />
              <span className="hidden sm:inline">Export Report</span>
            </Button>
            <Button className="sm:hidden bg-white border border-slate-200 text-slate-900 p-2" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Map */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Territory Analysis</h2>
              <p className="text-sm text-slate-500 mt-1">Select a target market state via the dropdown or map to view operational feasibility.</p>
            </div>

            <div className="w-full">
              <label htmlFor="state-select" className="block text-sm font-medium text-slate-700 mb-2">Select Target Region:</label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 sm:text-sm"
              >
                {Object.entries(regionsData).map(([key, region]) => (
                  <option key={region.id} value={key}>{region.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-4 min-h-[400px]">
              <IndiaMap
                selectedState={selectedState}
                onStateSelect={(state) => setSelectedState(state)}
              />
            </div>
          </div>

          {/* Right Column: Data Context */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {data.name} Operations Overview
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Displaying metrics and financial models for the selected region.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedState}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <KPICards data={data} />
                <DemandCharts data={data} />
                <ExecutiveSummary data={data} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
