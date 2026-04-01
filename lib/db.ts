import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const sql = neon(process.env.DATABASE_URL);

// Type definitions for database entities
export interface Device {
  id: string;
  brand: string;
  model: string;
  category: "phone" | "laptop" | "console" | "accessory" | "tablet";
  storage_options: string[];
  image_url: string | null;
  release_year: number | null;
  created_at: Date;
  updated_at: Date;
}

export interface DevicePrice {
  id: string;
  device_id: string;
  storage: string;
  condition: "new" | "like_new" | "good" | "fair" | "poor";
  price: number;
  trade_in_value: number;
  updated_at: Date;
}

export interface RepairService {
  id: string;
  name: string;
  description: string;
  icon: string;
  created_at: Date;
}

export interface RepairCost {
  id: string;
  device_id: string;
  service_id: string;
  min_cost: number;
  max_cost: number;
  estimated_time: string;
  updated_at: Date;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service_type: string | null;
  device_info: string | null;
  status: "new" | "in_progress" | "resolved";
  created_at: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  is_featured: boolean;
  created_at: Date;
}

// Helper to get device with prices
export interface DeviceWithPrices extends Device {
  prices: DevicePrice[];
}

// Helper for trade-in calculation result
export interface TradeInResult {
  oldDevice: Device;
  newDevice: Device;
  tradeInValue: number;
  newDevicePrice: number;
  swapCost: number;
  savings: number;
}
