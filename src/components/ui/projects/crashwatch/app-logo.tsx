import { cn } from '@/lib/utils';

interface AppLogoProps {
    className?: string;
}

export default function CrashWatchAppLogo({ className }: AppLogoProps) {
    return (
        <>
            <div className="flex items-center justify-center pb-2">
                <h1 className='text-background text-4xl md:text-6xl font-family-ronzino tracking-tight font-bold'>Crashwatch</h1>
            </div>
        </>
    );
}
