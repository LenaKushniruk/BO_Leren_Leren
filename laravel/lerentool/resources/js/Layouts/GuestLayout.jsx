import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="login-backgound flex min-h-screen flex-col items-center  pt-6 sm:justify-center sm:pt-0 dark:bg-yellow-900">
            <div>
                <Link href="/">
                <img className='login-logo-img' src="/img/transparent logo.png" alt="" />                                
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
