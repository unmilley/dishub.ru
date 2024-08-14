import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
  type User,
} from 'firebase/auth'

export const useAuth = () => {
  const user = useState<User | null>('userStore', () => null)

  useFirebase()

  const auth = getAuth()

  const login = async (_arg0: any) => {
    await setPersistence(auth, browserLocalPersistence)
    const data = await signInWithEmailAndPassword(auth, _arg0.email, _arg0.password)

    user.value = data.user
    const token = await data.user.getIdToken()
    await serverAuth(token)
  }
  const signUp = async (_arg0: any) => {
    await setPersistence(auth, browserLocalPersistence)
    const data = await createUserWithEmailAndPassword(auth, _arg0.email, _arg0.password)
    await updateProfile(data.user, { displayName: _arg0.username })
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

  onAuthStateChanged(auth, (userDetails) => {
    user.value = userDetails
  })
  return { user, login, signUp, logout }
}
