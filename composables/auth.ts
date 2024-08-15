import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  type User,
} from 'firebase/auth'

export type SignInCredential = {
  email: string
  password: string
}

export type SignUpCredential = SignInCredential & { username: string }

export const useAuth = () => {
  const user = useState<User | null>('userStore', () => null)

  useFirebase()
  const { userDB } = useDatabase()

  const auth = getAuth()

  // const { $auth: auth } = useNuxtApp()

  const login = async ({ email, password }: SignInCredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password)

    user.value = data.user
    const token = await data.user.getIdToken()
    await serverAuth(token)
  }
  const signUp = async ({ email, password, username }: SignUpCredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(data.user, {
      displayName: username,
      photoURL: `https://avatar.iran.liara.run/username?username=${username}`,
    })
    await userDB.set(data.user)
    await sendEmailVerification(data.user)
    user.value = data.user
    const token = await data.user.getIdToken()
    await serverAuth(token)
  }
  const logout = async () => {
    await auth.signOut()
    const data = await $fetch('/api/auth/logout', { method: 'post' })
    if (data.statusCode === 200) {
      navigateTo('/')
    }
  }

  const serverAuth = async (token: string) => {
    try {
      const data = await $fetch('/api/auth/login', { method: 'post', body: JSON.stringify({ token }) })
      if (data.statusCode === 200) {
        navigateTo('/dashboard')
      }
    } catch (error) {
      console.log('error: ', error)
      alert('Invalid credentials.....')
    }
  }

  onAuthStateChanged(auth, async (userDetails) => {
    user.value = userDetails

    if (userDetails) userDB.get(userDetails.uid)
    else userDB.user.value = null
  })
  return { user, login, signUp, logout }
}
