const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded bg-neutral-200 dark:bg-neutral-700 ${className}`}
  />
);

export const SkeletonCard = () => (
  <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 p-4 space-y-3">
    <Skeleton className="h-4 w-1/3" />
    <Skeleton className="h-8 w-1/2" />
    <Skeleton className="h-3 w-2/3" />
  </div>
);

export const SkeletonRow = () => (
  <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-50 dark:border-neutral-800">
    <Skeleton className="w-9 h-9 rounded-full shrink-0" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
    <Skeleton className="h-5 w-14 rounded-full" />
  </div>
);

export const SkeletonConversation = () => (
  <div className="flex items-start gap-3 px-4 py-3 border-b border-neutral-50">
    <Skeleton className="w-9 h-9 rounded-full shrink-0" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-3 w-2/5" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  </div>
);

export default Skeleton;
