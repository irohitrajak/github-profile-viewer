function SearchBar({ username, setUsername, onSearch, loading }) {
  return (
    <form onSubmit={onSearch} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="github-username">
        GitHub username
      </label>

      <input
        id="github-username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Type a GitHub username"
        className="w-full flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;