import type { User } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'

export namespace Database {
  export type User = {
    uid: string
    username: string
    avatar: string
    isOnline: boolean
  }
  export type PartialUserWithUid = Pick<User, 'uid'> & Partial<Omit<User, 'uid'>>
}

export const useDatabase = () => {
  useFirebase()

  const db = getFirestore()

  const get = async <T>(path: string): Promise<T | null> => {
    const docSnap = await getDoc(doc(db, path))
    return docSnap.exists() ? (docSnap.data() as T) : null
  }
  const set = async (path: string, data: any) => {
    await setDoc(doc(db, path), data)
  }
  const update = async (path: string, data: any) => {
    await updateDoc(doc(db, path), data)
  }

  const userDB = {
    user: useState<Database.User | null>('userDB', () => null),
    get: async function (uid: string) {
      const data = await get<Database.User>(`users/${uid}`)
      this.user.value = data
      return data
    },
    set: async function (user: User) {
      const { uid, displayName: username, photoURL: avatar } = user
      await set(`users/${uid}`, { uid, username, avatar, isOnline: true })
    },
    change: async function (user: Database.PartialUserWithUid) {
      try {
        await update(`users/${user.uid}`, user)
        return true
      } catch (error) {
        return false
      }
    },
  }

  return { userDB }
}
