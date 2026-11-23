type Props = { id: string; children: string };

const SectionTitle = ({ id, children }: Props) => (
  <h2
    id={id}
    className="font-display text-4xl font-bold tracking-tight sm:text-6xl"
  >
    {children}
  </h2>
);

export default SectionTitle;
