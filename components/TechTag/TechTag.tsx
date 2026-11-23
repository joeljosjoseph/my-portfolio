import { TECH, type TechKey } from "@/data/tech";

type Props = { tech: TechKey };

/** A technology with its icon and name. Render inside a <ul>. */
const TechTag = ({ tech }: Props) => {
  const { label, Icon } = TECH[tech];
  return (
    <li className="inline-flex items-center gap-2 border border-black/20 bg-white px-3 py-1.5 text-sm">
      {Icon && <Icon aria-hidden="true" className="text-base" />}
      {label}
    </li>
  );
};

export default TechTag;
