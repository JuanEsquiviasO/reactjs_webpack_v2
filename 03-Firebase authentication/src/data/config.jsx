import firebase from 'firebase'

// Initialize Firebase
const config = {
	apiKey: "AIzaSyATTZOyWvBkAJVHyIsi3LC89y9lbne2pwE",
	authDomain: "movie-database-52733.firebaseapp.com",
	databaseURL: "https://movie-database-52733.firebaseio.com",
	projectId: "movie-database-52733",
	storageBucket: "movie-database-52733.appspot.com",
	messagingSenderId: "1056253391523"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

