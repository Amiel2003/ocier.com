import AppLogoIcon from './app-logo-icon';
import { cn } from '@/lib/utils';

interface AppLogoProps {
    className?: string;
}

export default function MatigdaAppLogo({ className }: AppLogoProps) {
    return (
        <>
            <div className="flex items-center justify-center">
                <AppLogoIcon
                    className={cn(
                        "h-6 w-auto fill-current text-sidebar-primary dark:text-sidebar-primary",
                        className
                    )}
                />
            </div>
        </>
    );
}
