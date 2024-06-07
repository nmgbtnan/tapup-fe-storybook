type GridCardProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GridCard({
  className = '',
  children,
  ...rest
}: GridCardProps) {
  return (
    <div className={`rounded-md bg-white shadow-xl ${className}`} {...rest}>
      {children}
    </div>
  );
}
