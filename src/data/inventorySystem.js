export const BASE_PRICE = 9000000;

export const CORE_FEATURES = [
  "Web Admin Dashboard (1 warehouse / location)",
  "Item Master Data (SKU/code, name, category, unit, minimum stock)",
  "Inbound & Outbound stock recording",
  "Automatic low-stock alerts on the dashboard",
  "Stock movement history report with date filters",
  "Export reports to Excel / PDF",
  "2 user roles (Admin & Warehouse Operator)",
  "Free server / cloud setup",
  "1-year bug warranty (business hours)",
];

export const ADDONS = [
  {
    id: "barcode-scan",
    name: "Barcode / QR scanning via phone camera or USB scanner",
    price: 500000,
    description: "Fast inbound & outbound item entry without manual typing, just point your phone camera at the barcode.",
  },
  {
    id: "barcode-print",
    name: "Automatic barcode & QR label printing",
    price: 400000,
    description: "Generate print-ready barcode and QR sticker formats directly for thermal printers or sticker sheets.",
  },
  {
    id: "delivery-order-print",
    name: "Delivery order (DO) & goods receipt (GR) printing",
    price: 400000,
    description: "Automatically format and print standard Delivery Orders and Goods Receipt slips.",
  },
  {
    id: "bulk-import-excel",
    name: "Bulk item data import via Excel",
    price: 350000,
    description: "Upload hundreds or thousands of items at once from Excel spreadsheets without one-by-one input.",
  },
  {
    id: "stock-opname",
    name: "Quick stock count & reconciliation module",
    price: 600000,
    description: "Input periodic physical inventory counts against system data with instant variance (+/-) calculation.",
  },
  {
    id: "multi-warehouse",
    name: "Multi-warehouse / branch transfers",
    price: 800000,
    description: "Manage inventory across 2-3 locations or branches with complete transfer and transit history.",
  },
  {
    id: "batch-expiry",
    name: "Batch number & expiration date tracking",
    price: 500000,
    description: "Track shipment batch numbers and configure automated expiry date alerts (ideal for food, FMCG, and chemicals).",
  },
  {
    id: "outbound-approval",
    name: "Outbound stock approval workflow",
    price: 600000,
    description: "Require supervisor or owner approval before outbound items are released and stock is deducted.",
  },
  {
    id: "audit-log",
    name: "Staff audit log & activity history",
    price: 400000,
    description: "Track which staff edited or removed stock records with precise timestamps to prevent discrepancies and fraud.",
  },
  {
    id: "wa-notifications",
    name: "Automated WhatsApp notifications",
    price: 500000,
    description: "Send automated alerts directly to the owner's WhatsApp when new shipments arrive or stock runs low.",
  },
  {
    id: "mobile-pwa",
    name: "Mobile touch optimization / PWA",
    price: 600000,
    description: "Touch-optimized interface installable as a web app on warehouse staff smartphones.",
  },
  {
    id: "stock-valuation",
    name: "Total inventory asset valuation report",
    price: 450000,
    description: "Automatically compute and summarize the total financial rupiah value of inventory currently held in stock.",
  },
];

export const formatRupiah = (amount) => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};
