import { type FC } from "react";

interface Product {
  name: string;
  peakSale: string;
  year: string;
}

const products: Product[] = [
  { name: "Nubeqa ⇔ Kerendia", peakSale: "≥€6bn", year: "2027" },
  { name: "Asundexian", peakSale: "≥€5bn", year: "2026" },
  { name: "Elinzanetant", peakSale: "≥€1bn", year: "2025" },
];

const strategies = [
  "New Products to Offset Declines in Mature Portfolio",
  "Revenue Growth Offset due to Mature Portfolio Decline (Xarelto (LoE), Nexavar & VBP in China)",
];

export const PipelineTherapy: FC = () => {
  return (
    <div className="pipeline-therapy">
      <h2 className="section-title">Pipeline & Therapy Focus</h2>
      <div className="pipeline-content">
        <div className="pipeline-subtitle">Short & Mid Growth Drivers</div>
        <div className="peak-sale-label">Peak Sale Potential</div>
        <div className="products-row">
          {products.map((product, index) => (
            <>
              <div key={index} className="product-card">
                <div className="product-name">{product.name}</div>
                <div className="product-peak-sale">{product.peakSale}</div>
                <div className="product-year">{product.year}</div>
              </div>
              {index < products.length - 1 && (
                <span key={`connector-${index}`} className="product-connector">+</span>
              )}
            </>
          ))}
        </div>
        <div className="strategies">
          <ul className="strategies-list">
            {strategies.map((strategy, index) => (
              <li key={index}>{strategy}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

