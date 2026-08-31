import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import type { AchievementItem } from "@/content/achievements";

export interface AchievementCardProps {
  achievement: AchievementItem;
}

/**
 * Reusable prestasi/achievement card.
 *
 * Real achievement data is not available, so placeholder entries are clearly
 * marked with a "Data menyusul" badge rather than fabricated figures. Includes
 * a hover lift for consistency with the other cards.
 */
export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card
      elevation="sm"
      className="group h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <CardBody className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-transform duration-300 group-hover:scale-110">
            <Icon name={achievement.icon} />
          </span>
          {achievement.placeholder && (
            <Badge variant="neutral">Data menyusul</Badge>
          )}
        </div>
        <p className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
          {achievement.value}
        </p>
        <Heading as="h3" size="sm" className="text-base">
          {achievement.label}
        </Heading>
        <p className="text-sm text-neutral-600">{achievement.description}</p>
      </CardBody>
    </Card>
  );
}
