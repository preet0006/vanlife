export const InventorySkeleton = () => {
  return (
    <div className="relative w-full lg:w-[48%] min-h-[650px] border border-gray-200 rounded-t-3xl animate-pulse flex-shrink-0">
      <div className="w-full h-[400px] bg-gray-200 rounded-t-3xl" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
      </div>
      <div className="flex justify-center mt-6">
        <div className="h-11 w-[85%] bg-gray-300 rounded-full mb-4" />
      </div>
    </div>
  );
};
