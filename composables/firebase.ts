import config from '@/.configs/dishub-firebase-config.json'
import { getApps, initializeApp, type FirebaseOptions } from 'firebase/app'

const firebaseConfig = config as FirebaseOptions

export const useFirebase = () => {
  if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig)

    return { app }
  }
}
