import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/common/Icon";
import type { FacilityItem } from "@/content/facilities";

export interface FacilityCardProps {
  facility: FacilityItem;
}

/**
 * Reusable fasilitas card (icon + text).
 *
 * Facility photos do not exist, so the card is icon-based per the factual
 * policy. Includes a hover state (border/shadow/icon lift) for tactile feedback
 * while remaining non-interactive (informational).
 */
export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700 transition-transform duration-300 group-hover:scale-110">
        <Icon name={facility.icon} />
      </span>
      <Heading as="h3" size="sm" className="text-lg">
        {facility.title}
      </Heading>
      <p className="text-sm text-neutral-600">{facility.description}</p>
    </div>
  );
}
