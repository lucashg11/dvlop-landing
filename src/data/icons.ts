import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CircleCheck,
  Clock,
  CodeXml,
  MenuIcon,
  Paintbrush,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "@lucide/astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export const ICONS: Record<string, AstroComponentFactory> = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  award: Award,
  "circle-check": CircleCheck,
  clock: Clock,
  "code-xml": CodeXml,
  menu: MenuIcon,
  paintbrush: Paintbrush,
  "shopping-cart": ShoppingCart,
  target: Target,
  "trending-up": TrendingUp,
  users: Users,
  x: X,
  zap: Zap,
};
