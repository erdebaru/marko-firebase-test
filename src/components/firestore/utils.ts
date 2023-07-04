import { app } from '@/services/firebase';
import { getFirestore } from 'firebase/firestore/lite';

export const db = getFirestore(app);