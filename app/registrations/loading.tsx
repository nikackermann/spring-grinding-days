import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonDemo() {
    return (
        <div>
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    );
}
