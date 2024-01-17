"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import NavMenu from "./NavMenu"

export default function Main({children}) {
  const { data: session } = useSession()
  if(!session) {
    return (
    <div>You are not logged in!
      <div>
        <button onClick={() => signIn('google')}>Sign in</button>
      </div>
    </div>
    )
  }
  return (
    <div className="flex min-h-screen bg-blue-900">
      <NavMenu />
      <div className="bg-white flex-grow p-4 mr-2 my-2 ml-0 rounded-lg">
        {children}
      </div>
    </div>
  )
}