import Image from "next/image";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import type { TeacherProfile } from "@/content/teachers";

export interface TeacherCardProps {
  teacher: TeacherProfile;
}

/**
 * Reusable pengajar/tutor profile card.
 *
 * Supports foto, nama, posisi, bidang, pengalaman, and deskripsi singkat. When
 * no consented photo is available (`teacher.photo` unset), renders a consistent
 * avatar placeholder glyph in a fixed-aspect box so there is no layout shift.
 * Placeholder profiles are clearly marked with a "Profil menyusul" badge.
 */
export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Card
      interactive
      elevation="sm"
      className="group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Photo / avatar placeholder — fixed aspect ratio to avoid layout shift */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary-50">
        {teacher.photo ? (
          <Image
            src={teacher.photo}
            alt={`Foto ${teacher.name}, ${teacher.position} RUBELA`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-secondary-400"
          >
            <Icon name="users" width={56} height={56} />
          </div>
        )}
      </div>

      <CardBody className="flex h-full flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <Heading as="h3" size="sm" className="text-lg">
              {teacher.name}
            </Heading>
            {teacher.placeholder && (
              <Badge variant="neutral">Profil menyusul</Badge>
            )}
          </div>
          <p className="text-sm font-medium text-secondary-700">
            {teacher.position}
          </p>
        </div>

        <Badge variant="primary" className="self-start">
          {teacher.subject}
        </Badge>

        <p className="text-sm text-neutral-600">
          <span className="font-semibold text-neutral-700">Pengalaman:</span>{" "}
          {teacher.experience}
        </p>

        <p className="mt-auto text-sm text-neutral-600">{teacher.bio}</p>
      </CardBody>
    </Card>
  );
}
