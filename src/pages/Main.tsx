import React from 'react'
import { Outlet } from 'react-router-dom'
import './Main.css';
import { getFirestore } from 'firebase/firestore'
import { FirestoreProvider, useFirebaseApp } from 'reactfire'

export const Main = () => {
    const firestoreInstance = getFirestore(useFirebaseApp());

    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <section>
                <Outlet />
            </section>
        </FirestoreProvider>
    )
}
