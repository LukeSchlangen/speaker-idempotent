"use server"

import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const firestore = getFirestore(initializeApp());

export const addMessage = async (message: { text: string }) => {
    console.log(message);
    await firestore.collection('messages').add(message);
    return;
};