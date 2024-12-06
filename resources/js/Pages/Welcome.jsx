import { Head, Link } from '@inertiajs/react';
import Folder from '@/Components/Folder'
import TaskBar from '@/Components/Taskbar';
import { ZIndexProvider } from '@/Components/ZInxdexProvider';

export default function Welcome() {

    return (
        <ZIndexProvider>
            <div className='bg-gradient-to-r from-gray-800/80 to-black'>
                <Head title="Welcome" />
                <Folder />
                <TaskBar />
            </div>
        </ZIndexProvider>
    );
}