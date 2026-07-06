import {
  Lightning,
  Wrench,
  ArrowsClockwise,
  Gauge,
  House,
  Buildings,
  Cpu,
  Drop,
  ShieldCheck,
  SealCheck,
  Clock,
  Certificate,
  CheckCircle,
  type Icon,
} from "@phosphor-icons/react";

export const serviceIconMap: Record<string, Icon> = {
  bolt: Lightning,
  wrench: Wrench,
  swap: ArrowsClockwise,
  gauge: Gauge,
  house: House,
  buildings: Buildings,
  cpu: Cpu,
  drop: Drop,
};

export const badgeIconMap: Record<string, Icon> = {
  shield: ShieldCheck,
  seal: SealCheck,
  clock: Clock,
  certificate: Certificate,
  check: CheckCircle,
  gauge: Gauge,
};
