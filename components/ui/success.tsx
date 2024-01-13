import { CheckCircledIcon } from '@radix-ui/react-icons'

export default function Success({ className }: any) {
    return (
        <div className={`${className} flex items-center`}>
            <CheckCircledIcon className="mr-3 mt-4 h-6 w-6" />
            <span className="mt-4">Successfully Registered</span>
        </div>
    )
}
