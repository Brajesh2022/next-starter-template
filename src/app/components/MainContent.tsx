export default function MainContent() {
  return (
    <div className="text-white">
      <div className="fixed top-4 left-4 z-50">
        <a href="#" className="text-2xl font-bold">
          AnimeStream
        </a>
      </div>
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
        <div className="relative">
          <input
            type="search"
            id="search-input-main"
            placeholder="Search for series or movies..."
            className="pl-12 pr-12 w-full glass-effect border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 h-14 rounded-full bg-black/90 backdrop-blur-xl border-2 shadow-2xl"
          />
          <button
            id="search-close-btn"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            title="Clear search"
          >
            &#x2715;
          </button>
        </div>
        <button
          id="search-toggle-btn"
          className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 rounded-full transition-all duration-500 hover:scale-105 p-0 flex items-center justify-center group"
          title="Search"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold">Search Results for &quot;&quot;</h1>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <div className="text-center">Loading...</div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Stream Servers</h2>
          <div className="flex items-center space-x-2">
            <span>Subtitles</span>
            <button className="px-3 py-1 bg-green-500 rounded-md">On</button>
            <button className="px-3 py-1 bg-red-500 rounded-md">Off</button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Download Links</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <div className="flex items-center space-x-2">
          <span>Subtitles</span>
          <button className="px-3 py-1 bg-green-500 rounded-md">On</button>
          <button className="px-3 py-1 bg-red-500 rounded-md">Off</button>
        </div>
      </div>
    </div>
  );
}
