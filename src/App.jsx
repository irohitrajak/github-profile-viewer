import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProfile = async (searchTerm) => {
    const trimmedUsername = searchTerm.trim();

    if (!trimmedUsername) {
      setError('Please enter a GitHub username.');
      setProfile(null);
      return;
    }

    try {
      setLoading(true);
      setError('');
      setProfile(null);

      const response = await fetch(`https://api.github.com/users/${trimmedUsername}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('GitHub user not found. Try another username.');
        }

        throw new Error('Something went wrong while fetching the profile.');
      }

      const data = await response.json();
      setProfile(data);
    } catch (fetchError) {
      setError(fetchError.message || 'Unable to load profile data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchProfile(username);
  };

  return (
    <main className="min-h-screen px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
        <section className="w-full rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              React + Vite + Tailwind
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              GitHub Profile Viewer
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Search any public GitHub username and instantly view their profile details in a clean, responsive card.
            </p>
          </div>

          <SearchBar
            username={username}
            setUsername={setUsername}
            onSearch={handleSearch}
            loading={loading}
          />

          <div className="mt-8">
            {loading && (
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-8 text-center text-slate-300 shadow-lg">
                <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />
                <p>Loading profile data...</p>
              </div>
            )}

            {!loading && error && (
              <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-5 text-center text-rose-200">
                {error}
              </div>
            )}

            {!loading && profile && <ProfileCard profile={profile} />}

            {!loading && !profile && !error && (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/40 p-8 text-center text-slate-400">
                Enter a username above to preview a GitHub profile.
              </div>
            )}
          </div>
        </section>

        <p className="text-center text-xs text-slate-500 sm:text-sm">
          Built with functional React components, hooks, Fetch API, and Tailwind utility classes.
        </p>
      </div>
    </main>
  );
}

export default App;