export default function CircleLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      
      <div className="relative w-20 h-20">
        
        {/* Background circle */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>

        {/* Animated circle */}
        <div className="absolute inset-0 border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

      </div>

    </div>
  );
}