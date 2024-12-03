import { Head, Link } from '@inertiajs/react';
import Folder from '@/Components/Folder'
import TaskBar from '@/Components/Taskbar';

export default function Welcome() {

    return (
        <>
            <div className='bg-gradient-to-r from-blue-400 to-blue-800'>
                <Head title="Welcome" />
                <Folder />
                <TaskBar />


            </div>
        </>
    );
}
