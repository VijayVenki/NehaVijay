import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
const firebaseConfig = {
  apiKey: "AIzaSyAhR8ECqpPmql7VjNtrIgtJVa0NxYSNt14",
  authDomain: "neha-backend.firebaseapp.com",
  projectId: "neha-backend",
  storageBucket: "neha-backend.firebasestorage.app",
  messagingSenderId: "294893906916",
  appId: "1:294893906916:web:ce7fab419731182cb6f5f1",
  measurementId: "G-3R9SXMQV5E"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), provideClientHydration(), provideAnimationsAsync(),provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())]
};
