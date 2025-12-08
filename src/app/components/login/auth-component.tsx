import { signIn } from "../../../../auth.config"

export function SignIn({
  provider,
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button className="border-l border-zinc-200 pl-2 text-xl cursor-pointer">Sign in</button>
    </form>
  )
}
