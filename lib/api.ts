import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "1",
    slug: "prismatic-lfp-cell",
    name: "Prismatic LFP Cell",
    category: "Battery Cells",
    description: "Prismatic LFP cell with exceptional thermal stability and superior cycle life performance.",
    price: "Contact for Quote",
    image: "/01.png",
    features: [
      "Ultra-Secure: Explosion-proof / No smoke",
      "Ultra-long Life: Up to 15 years and 10,000 cycles",
      "Cost-friendly: Low maintenance charge",
      "High-Adaptability: Wide operating temperature range"
    ],
    specs: {
      "Decomposition Temperature": "270°C",
      "Cycle Life": "4,000 cycles (>80% SOH)",
      "Annual Degradation": "<3%",
      "Certifications": "GB/UL/IEC/UN/MSDS/ROHS/BIS"
    },
    content: `
      <p>The Prismatic LFP Cell has passed strict global certifications including GB, UL, IEC, UN, MSDS, ROHS, and BIS. It offers exceptional thermal stability with decomposition temperature up to 270°C.</p>
      <h2>Superior Cycle Life Performance</h2>
      <p>Achieves 4,000 cycles while maintaining >80% state of health (SOH). Calendar aging rate is less than 3% annual capacity degradation.</p>
      <h2>Key Advantages</h2>
      <ul>
        <li><strong>Ultra-Secure:</strong> Explosion-proof with no smoke emission</li>
        <li><strong>Ultra-long Life:</strong> Up to 15 years and 10,000 cycles</li>
        <li><strong>Cost-friendly:</strong> Low maintenance charge with overall cost advantage</li>
        <li><strong>High-Adaptability:</strong> Wide operating temperature range</li>
      </ul>
      <p>Multiple options are available for selection to meet various application requirements.</p>
    `
  },
  {
    id: "2",
    slug: "cylindrical-cell",
    name: "Cylindrical Cell",
    category: "Battery Cells",
    description: "Standardized cylindrical cell with superior thermal management and structural strength.",
    price: "Contact for Quote",
    image: "/03.png",
    features: [
      "Standardization & High Compatibility",
      "Cylindrical steel casing withstands >20MPa radial pressure",
      "40% larger heat dissipation area than prismatic cells",
      "Better Charge/Discharge Rates"
    ],
    specs: {
      "Radial Pressure": ">20MPa",
      "Heat Dissipation": "40% larger than prismatic cells",
      "Configuration": "1P to 1000P series-parallel",
      "C-rate": "Higher performance supported"
    },
    content: `
      <p>The Cylindrical Cell offers standardization and high compatibility with globally standardized sizes. It supports flexible configurations from 1P to 1000P series-parallel combinations.</p>
      <h2>Structural Strength Advantage</h2>
      <p>The cylindrical steel casing withstands >20MPa radial pressure, making it highly durable and reliable for demanding applications.</p>
      <h2>Superior Thermal Management</h2>
      <p>With 40% larger heat dissipation area compared to prismatic cells, the cylindrical design ensures better temperature regulation and prolonged battery life. It also supports better charge/discharge rates with higher C-rate performance.</p>
    `
  },
  {
    id: "3",
    slug: "battery-management-system",
    name: "Battery Management System",
    category: "Battery Management",
    description: "Comprehensive battery management with multi-layered protection and real-time monitoring.",
    price: "Contact for Quote",
    image: "/02.png",
    features: [
      "Over-current Protection",
      "Over-charge/Over-discharge Protection",
      "Battery Monitoring",
      "Short Circuit Protection"
    ],
    specs: {
      "Connectivity": "Bluetooth / CAN bus",
      "Monitoring": "Real-time SOC & SOH",
      "Temperature": "Full-range monitoring",
      "Communication": "Remote monitoring capable"
    },
    content: `
      <p>The Battery Management System provides comprehensive protection and monitoring for battery installations, ensuring safety, longevity, and optimal performance.</p>
      <h2>Protection Features</h2>
      <ul>
        <li><strong>Over-charge/Over-discharge Protection:</strong> Prevents voltage too high or too low conditions to avoid damage and extend battery life</li>
        <li><strong>Over-current Protection:</strong> Prevents current from damaging components</li>
        <li><strong>Short Circuit Protection:</strong> Cuts power during short circuits to reduce explosion/fire risks</li>
        <li><strong>Temperature Monitoring:</strong> Stops operation if too hot or cold to prevent fires or performance loss</li>
      </ul>
      <h2>Real-time Monitoring</h2>
      <p>Displays real-time battery SOC (State of Charge) and SOH (State of Health). Connects via Bluetooth or CAN bus for remote monitoring through phone apps or integrated systems.</p>
    `
  }
];

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products.find(p => p.slug === slug);
}