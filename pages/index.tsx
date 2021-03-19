import { signIn, signOut, useSession } from 'next-auth/client';

function Loading() {
  return (
    <div>
      Carregando...
    </div>
  );
}

export default function Login() {

  const [session, loading] = useSession();

  if (loading) {
    return (<Loading />)
  }

  console.log(session);

  return (
    <div>
      <header>

      </header>
      <main>
        { !session ? (
        <div>
          <button onClick={(): Promise<void> => signIn('github')}>Login</button>
        </div>
        )
          :
          (
            <div>
              <div className="session">
                {session.user.email} - {JSON.stringify(session)} - {session.accessToken}
              </div>
              <div className="logout">
                <button onClick={(): Promise<void> => signOut()}>Logout</button>
              </div>
            </div>
          )
        }
      </main>
    </div>
  )
}