import Nav from '../components/nav'
import useSWR from 'swr'
import api from '../utils/api';

export default function IndexPage() {
  let loading = false;
  let users = []
  const { data, error } = useSWR('/api/user', api)
  if (error) {
    console.log(error)
  }
  if (data) {
    loading = true;
    users = data.data
  }

  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-center text-gray-700 dark:text-gray-100">
          {!loading && (
            <div>Carregando...</div>
          )}
          {loading &&
            (
              <ul>
                {users.map(element => {
                  return <li key={element.name}>{element.name}</li>
                })}
              </ul>
            )}
        </h1>
      </div>
    </div>
  )
}
