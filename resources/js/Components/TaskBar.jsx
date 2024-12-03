export default function TaskBar() {

    return (
        <div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-between px-6 py-2 shadow-lg">
            <div class="flex items-center space-x-4">
                <span class="font-bold text-lg">Start</span>
                <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-sm"></div>
                <div class="w-6 h-6 bg-red-500 rounded-sm"></div>
                </div>
            </div>
            <div class="flex items-center">
                <span>12:00 PM</span>
            </div>
        </div>
    )
}