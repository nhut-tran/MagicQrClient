
function Feature({title, description, children}: {title: string, description: string, children: React.ReactNode}) {
  return (
    <div className="flex flex-col h-full w-full md:w-[15%] min-w-[300px]">
      <div className="flex flex-col justify-center">{children}
      <p className="text-xl font-bold ml-1 block h-12">{title}</p>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
export default Feature;