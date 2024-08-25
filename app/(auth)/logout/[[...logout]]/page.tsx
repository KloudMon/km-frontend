'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/clerk-react';

const LogoutPage = () => {
    const router = useRouter();
    const { signOut } = useAuth();

    useEffect(() => {
        const performLogout = async () => {
            await signOut();
            router.push('/login');
        };

        performLogout();
    }, [signOut, router]);

    return <div>Logging out...</div>;
};

export default LogoutPage;