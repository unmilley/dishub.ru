import config from '@/.configs/dishub-firebase-adminsdk.json'
import { type ServiceAccount } from 'firebase-admin'
import { cert, getApps, initializeApp } from 'firebase-admin/app'

export const firebaseAdmin = () => {
  try {
    const serviceAccount = config as ServiceAccount
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(serviceAccount),
      })
    }
  } catch (err) {
    // Error handling
    return { err }
  }
}
