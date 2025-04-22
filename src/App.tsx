import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from './hooks/useDebounce';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { GitHubUser } from './types/githubUser';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedUsername = useDebounce(username, 500);

  const fetchUser = async (username: string) => {
    if (!username) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('User not found');
      } else {
        setError('An error occurred while fetching user data');
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUser(username);
  };

  useEffect(() => {
    if (debouncedUsername) {
      fetchUser(debouncedUsername);
    }
  }, [debouncedUsername]);

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onSubmit={handleSubmit}
      />
      
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;