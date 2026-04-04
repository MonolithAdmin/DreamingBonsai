export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
      <div className="mx-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="3" fill="hsl(var(--primary))" opacity="0.5" />
          <circle cx="10" cy="10" r="6" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}