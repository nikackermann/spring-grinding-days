import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function Success({ className }: any) {
    return (
        <div className={`${className} flex items-center animate-fade-in`}>
            <CheckCircledIcon className="h-6 w-6 mr-3 mt-4" />
            <span className="mt-4">Successfully Registered</span>
        </div>
    );
}
