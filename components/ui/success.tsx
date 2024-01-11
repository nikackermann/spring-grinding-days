import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function Success() {
    return (
        <div className="flex items-center">
            <CheckCircledIcon className="h-6 w-6 mr-3" />
            <span>Successfully Registered</span>
        </div>
    );
}
