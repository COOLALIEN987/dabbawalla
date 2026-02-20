import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { regionsData } from '../../data/mockData';

const geoUrl = "https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States";

interface IndiaMapProps {
    selectedState: string;
    onStateSelect: (stateName: string) => void;
}

export function IndiaMap({ selectedState, onStateSelect }: IndiaMapProps) {
    const highlightStateNames = ["Maharashtra", "NCT of Delhi", "Delhi", "Karnataka", "Tamil Nadu", "West Bengal", "Telangana"];

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-white border border-slate-200 rounded-xl overflow-hidden p-4">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [82.8, 22.5]
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const stateName = geo.properties.NAME_1;
                            const mappedName = (stateName === "NCT of Delhi" || stateName === "Delhi") ? "Delhi" : stateName;
                            const isTarget = highlightStateNames.includes(stateName);
                            const isSelected = selectedState === mappedName;

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        if (regionsData[mappedName]) {
                                            onStateSelect(mappedName);
                                        }
                                    }}
                                    style={{
                                        default: {
                                            fill: isSelected ? "#0f172a" : (isTarget ? "#cbd5e1" : "#f8fafc"),
                                            stroke: "#ffffff",
                                            strokeWidth: 1,
                                            outline: "none",
                                            cursor: isTarget ? "pointer" : "default"
                                        },
                                        hover: {
                                            fill: isTarget ? (isSelected ? "#0f172a" : "#64748b") : "#f8fafc",
                                            stroke: "#ffffff",
                                            strokeWidth: 1,
                                            outline: "none",
                                            cursor: isTarget ? "pointer" : "default"
                                        },
                                        pressed: {
                                            fill: "#0f172a",
                                            stroke: "#ffffff",
                                            strokeWidth: 1,
                                            outline: "none",
                                        }
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
}
