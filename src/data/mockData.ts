export type StateData = {
    id: string;
    name: string;
    connectivity: number;
    transportCost: number;
    congestionIndex: number;
    infrastructure: string;
    commutingPatterns: string;
    modifications: string;
    riskLevel: "Low" | "Medium" | "High";
    financialModels: {
        name: string;
        profitMargin: number;
        workerPay: number;
    }[];
    clusterCosts: {
        category: string;
        cost: number;
    }[];
    modalSplit: {
        name: string;
        value: number;
        fill: string;
    }[];
    sourceMaterialUrl: string;
};

export const regionsData: Record<string, StateData> = {
    "Maharashtra": {
        id: "MH",
        name: "Maharashtra",
        connectivity: 82,
        transportCost: 45,
        congestionIndex: 78,
        infrastructure: "Linear transit (Local Trains) acts as the backbone.",
        commutingPatterns: "Highly centralized business districts (BKC, Nariman Point).",
        modifications: "Traditional bicycle + train combination remains highly effective.",
        riskLevel: "Low",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 280000 },
            { category: "Gig Workers", cost: 140000 },
            { category: "Operations", cost: 80000 },
            { category: "Hubs & Tech", cost: 60000 },
        ],
        modalSplit: [
            { name: "Local Train", value: 55, fill: "#0f172a" },
            { name: "Bus (BEST)", value: 25, fill: "#334155" },
            { name: "Auto/Taxi", value: 15, fill: "#64748b" },
            { name: "Private", value: 5, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Dabbawala"
    },
    "Delhi": {
        id: "DL",
        name: "Delhi NCR",
        connectivity: 75,
        transportCost: 60,
        congestionIndex: 85,
        infrastructure: "Hub-and-spoke transit (Delhi Metro network).",
        commutingPatterns: "Scattered commercial hubs (Gurugram, Noida, CP).",
        modifications: "EV micro-hubs required near metro stations for final-mile delivery.",
        riskLevel: "Medium",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 290000 },
            { category: "Gig Workers", cost: 150000 },
            { category: "Operations", cost: 95000 },
            { category: "Hubs & Tech", cost: 65000 },
        ],
        modalSplit: [
            { name: "Metro", value: 45, fill: "#0f172a" },
            { name: "Bus (DTC)", value: 20, fill: "#334155" },
            { name: "2-Wheeler", value: 25, fill: "#64748b" },
            { name: "Auto/Cab", value: 10, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Delhi_Metro"
    },
    "Karnataka": {
        id: "KA",
        name: "Karnataka",
        connectivity: 55,
        transportCost: 85,
        congestionIndex: 92,
        infrastructure: "Limited metro reach; heavy reliance on road networks.",
        commutingPatterns: "Decentralized, massive tech parks (ORR, Whitefield).",
        modifications: "Hyper-local cloud kitchens mapping directly to specific IT parks.",
        riskLevel: "High",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 300000 },
            { category: "Gig Workers", cost: 180000 },
            { category: "Operations", cost: 110000 },
            { category: "Hubs & Tech", cost: 70000 },
        ],
        modalSplit: [
            { name: "2-Wheeler", value: 40, fill: "#0f172a" },
            { name: "BMTC Bus", value: 30, fill: "#334155" },
            { name: "Metro", value: 15, fill: "#64748b" },
            { name: "Cab/Auto", value: 15, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Namma_Metro"
    },
    "Tamil Nadu": {
        id: "TN",
        name: "Tamil Nadu",
        connectivity: 68,
        transportCost: 50,
        congestionIndex: 72,
        infrastructure: "Linear rail corridors with expanding metro network.",
        commutingPatterns: "Mixed IT corridors and traditional manufacturing hubs.",
        modifications: "Multimodal transit integration and sub-urban direct routes.",
        riskLevel: "Medium",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 260000 },
            { category: "Gig Workers", cost: 130000 },
            { category: "Operations", cost: 75000 },
            { category: "Hubs & Tech", cost: 55000 },
        ],
        modalSplit: [
            { name: "Bus (MTC)", value: 45, fill: "#0f172a" },
            { name: "2-Wheeler", value: 30, fill: "#334155" },
            { name: "MRTS/Metro", value: 15, fill: "#64748b" },
            { name: "Auto/Cab", value: 10, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Chennai_Metro"
    },
    "West Bengal": {
        id: "WB",
        name: "West Bengal",
        connectivity: 70,
        transportCost: 35,
        congestionIndex: 75,
        infrastructure: "Oldest metro network supplemented by robust local trains.",
        commutingPatterns: "Dense central business district clustering in Kolkata.",
        modifications: "Excellent model for direct Dabbawala replication using existing rail.",
        riskLevel: "Low",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 250000 },
            { category: "Gig Workers", cost: 120000 },
            { category: "Operations", cost: 70000 },
            { category: "Hubs & Tech", cost: 50000 },
        ],
        modalSplit: [
            { name: "Bus/Tram", value: 40, fill: "#0f172a" },
            { name: "Metro/Rail", value: 35, fill: "#334155" },
            { name: "Auto/Rickshaw", value: 20, fill: "#64748b" },
            { name: "Private", value: 5, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Kolkata_Metro"
    },
    "Telangana": {
        id: "TG",
        name: "Telangana",
        connectivity: 62,
        transportCost: 75,
        congestionIndex: 82,
        infrastructure: "Strong metro presence in core zones, reliant on roads in suburbs.",
        commutingPatterns: "Massive outward sprawl towards HITEC City and Gachibowli.",
        modifications: "High reliance on motorized two-wheelers for final connectivity.",
        riskLevel: "High",
        financialModels: [
            { name: "₹500+10%", profitMargin: 30, workerPay: 3750 },
            { name: "₹500+20%", profitMargin: 25, workerPay: 6000 },
            { name: "₹800+20%", profitMargin: 40, workerPay: 10500 },
            { name: "₹1000+30%", profitMargin: 35, workerPay: 18000 },
        ],
        clusterCosts: [
            { category: "Food Makers", cost: 285000 },
            { category: "Gig Workers", cost: 165000 },
            { category: "Operations", cost: 90000 },
            { category: "Hubs & Tech", cost: 65000 },
        ],
        modalSplit: [
            { name: "2-Wheeler", value: 45, fill: "#0f172a" },
            { name: "TSRTC Bus", value: 25, fill: "#334155" },
            { name: "Metro", value: 20, fill: "#64748b" },
            { name: "Auto/Cab", value: 10, fill: "#94a3b8" }
        ],
        sourceMaterialUrl: "https://en.wikipedia.org/wiki/Hyderabad_Metro"
    }
};
