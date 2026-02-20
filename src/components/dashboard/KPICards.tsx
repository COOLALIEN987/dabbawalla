import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { StateData } from '../../data/mockData';
import { Bus, IndianRupee, TrafficCone } from 'lucide-react';

interface KPICardsProps {
    data: StateData;
}

export function KPICards({ data }: KPICardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">
                        Transport Connectivity
                    </CardTitle>
                    <Bus className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{data.connectivity}%</div>
                    <p className="text-xs text-slate-500 mt-1">Statewide public transit access</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">
                        Avg. Transport Cost
                    </CardTitle>
                    <IndianRupee className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-slate-900">₹{data.transportCost}</div>
                    <p className="text-xs text-slate-500 mt-1">Per median daily commute</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">
                        Congestion Index
                    </CardTitle>
                    <TrafficCone className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{data.congestionIndex}/100</div>
                    <p className="text-xs text-slate-500 mt-1">Peak hour traffic density</p>
                </CardContent>
            </Card>
        </div>
    );
}
