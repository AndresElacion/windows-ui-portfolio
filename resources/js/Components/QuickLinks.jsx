export default function QuickLinks() {
    return (
        <>
            <div className="w-1/4 bg-gray-100 border-r rounded-2xl border-gray-300 p-4">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#FFB900 ">
                  <path d="M12 2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16l-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L12 2z" />
                </svg>
                <h3 className="text-gray-800 pt-1 mb-4 ml-2">
                    Quick Access
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#0078D4">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
                  </svg>
                  <span className="pt-1 ml-2">About Me</span>
                </li>
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#FFB900">
                    <path d="M10 4l2 2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6z" />
                  </svg>
                  <span className="pt-1 ml-2">Projects</span>
                </li>
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#7A7574">
                    <path d="M10.2 2.1c.5 0 .9.4 1 .9l.3 1.7 1.6 1.6 1.6-.3c.5-.1.9.2 1 .7l1.2 4c.1.5-.1 1-.5 1.3l-3.7 3.7 6.3 6.3-1.4 1.4-6.3-6.3-3.7 3.7c-.3.3-.8.5-1.3.5l-4-1.2c-.5-.1-.8-.5-.7-1l.3-1.6 1.6-1.6-1.7-.3c-.5-.1-.9-.5-.9-1V2.1h8.1zm2.9 4.9l-1.4-1.4-2.8 2.8 1.4 1.4 2.8-2.8z" />
                  </svg>
                  <span className="pt-1 ml-2">Skills</span>
                </li>
              </ul>
            </div>
        </>
    )
}