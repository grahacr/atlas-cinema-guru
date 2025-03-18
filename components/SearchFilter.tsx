export default function SearchFilter() {
    return (
        <div className="flex flex-col space-y-4">
            <p className="text-white">Search</p>
                <input
                    className="w-80 border border-teal-300 rounded-4xl p-2"
                    type="text"
                    placeholder="Search movies..." />
                    
                <div className="flex justify-between w-80">
                    <div className="flex flex-col mr-2">
                        <p className="text-white pb-2">Min Year</p>
                        <input
                        className="w-40 border rounded-4xl border-teal-300 p-2"
                        type="text"
                        placeholder="minimum year" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white pb-2">Max Year</p>
                        <input
                        className="w-40 border rounded-4xl border-teal-300 p-2"
                        type="text"
                        placeholder="maximum year" />
                    </div>
                </div>
        </div>
    )
}