function ProfileCard({ profile }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="h-32 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 sm:h-40" />

      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="-mt-16 flex flex-col gap-6 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <img
              src={profile.avatar_url}
              alt={`${profile.name || profile.login} avatar`}
              className="h-32 w-32 rounded-3xl border-4 border-slate-950 bg-slate-800 object-cover shadow-xl shadow-cyan-950/30 sm:h-40 sm:w-40"
            />

            <div className="pb-1">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                {profile.login}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                {profile.name || 'No name provided'}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                {profile.bio || 'This user has not added a bio yet.'}
              </p>
            </div>
          </div>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Followers" value={profile.followers} />
          <StatCard label="Following" value={profile.following} />
          <StatCard label="Public Repos" value={profile.public_repos} />
        </div>
      </div>
    </article>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center transition duration-300 hover:border-cyan-400/20 hover:bg-white/10">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

export default ProfileCard;