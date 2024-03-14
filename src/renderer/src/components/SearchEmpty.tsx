export const SearchEmpty = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-32">
      <div className="font-bold text-xl">No results found</div>
      <div className="text-xs mt-2 text-zinc-400">
        Please make sure your words are spelled correctly, or use fewer or different keywords
      </div>
    </div>
  )
}
