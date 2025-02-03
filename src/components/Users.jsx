import { useSelector } from 'react-redux'

export default function User() {
  const users = useSelector(state => state.users.users)
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-2xl">Current Users</h1>
      {users.map(user => {
        return (
          <p
            key={user.gmail}
            className="px-3 py-2 border bg-green-200 mb-3">
            {user.name} & {user.gmail}
          </p>
        )
      })}
    </div>
  )
}
