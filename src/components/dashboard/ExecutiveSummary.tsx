import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { regionsData } from '../../data/mockData';
import type { StateData } from '../../data/mockData';
import { AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react';

interface ExecutiveSummaryProps {
    data: StateData;
}

export function ExecutiveSummary({ data }: ExecutiveSummaryProps) {
    const getRiskIcon = (risk: string) => {
        switch (risk) {
            case "Low":
                return <ShieldCheck className="h-5 w-5 text-emerald-600" />;
            case "Medium":
                return <TrendingUp className="h-5 w-5 text-amber-600" />;
            case "High":
                return <AlertTriangle className="h-5 w-5 text-rose-600" />;
            default:
                return null;
        }
    };

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case "Low":
                return "bg-emerald-50 text-emerald-700 border-emerald-200";
            case "Medium":
                return "bg-amber-50 text-amber-700 border-amber-200";
            case "High":
                return "bg-rose-50 text-rose-700 border-rose-200";
            default:
                return "bg-slate-50 text-slate-700 border-slate-200";
        }
    };

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Executive Summary & Risk Assessment</CardTitle>
                <CardDescription>Strategic operational insights for {data.name}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">City Infrastructure</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{data.infrastructure}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Commuting Patterns & Demand</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{data.commutingPatterns}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Required Operational Modifications</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{data.modifications}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-4">Phased Expansion & Risk Model</h4>
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">Region</th>
                                        <th className="px-4 py-3 font-medium">Risk Level</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    {Object.values(regionsData).map((region) => (
                                        <tr
                                            key={region.id}
                                            className={`${data.id === region.id ? 'bg-slate-50' : ''} transition-colors`}
                                        >
                                            <td className="px-4 py-3 font-medium text-slate-900">{region.name}</td>
                                            <td className="px-4 py-3 flex items-center gap-2">
                                                {getRiskIcon(region.riskLevel)}
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getRiskColor(region.riskLevel)}`}>
                                                    {region.riskLevel}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
