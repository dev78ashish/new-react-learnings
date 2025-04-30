import React, { useEffect } from 'react';
import { useGetUsersQuery } from './redux/slices/apiSlice';

function App() {
  const { data, error, isLoading } = useGetUsersQuery();

  // Print data to console when it changes
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data && (
          <li key="user-info">
            Name: {data.name}, Age: {data.age}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;