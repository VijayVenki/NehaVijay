import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-future-messages',
  templateUrl: './future-messages.component.html',
  styleUrls: ['./future-messages.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FutureMessagesComponent {
  futureMessages: { title: string; date: Date, description: string }[] = [];
  

  newMessage = { title: '', description: '', date: '' };
  constructor(private firestore: Firestore) {
    this.loadPost()
  }

  loadPost(): void { 
    const futureMessagesCollection = collection(this.firestore, 'futureMessages');
    getDocs(futureMessagesCollection).then((querySnapshot) => {
      this.futureMessages = []; // Clear current posts before adding new ones

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        this.futureMessages.push({
          title: postData['title'],  // Image URL (or base64) from Firestore
          date: postData['date'],
          description: postData['description'], // Caption from Firestore
        });
      });
    }).catch((error: any) => {
      console.error("Error fetching posts: ", error); // Handle error if fetching posts fails
    });
  }
  /**
   * Adds a new message to the list
   */
  addMessage() {
    if (
      this.newMessage.title &&
      this.newMessage.description &&
      this.newMessage.date
    ) {
      const postsCollection = collection(this.firestore, 'futureMessages');
      addDoc(postsCollection, {
        title: this.newMessage.title,
        date: this.newMessage.date,
        description: this.newMessage.description,
        createdAt: new Date()
      })
        .then(() => {
          this.newMessage = { title: '', description: '', date: '' };
          this.loadPost();
        })
        .catch((error) => console.error('Error adding post:', error));
    }
  }

  /**
   * Checks if a message can be opened based on its date
   * @param messageDate - Date of the message
   * @returns True if the message date has passed or is today, otherwise false
   */
  isMessageOpenable(messageDate: Date): boolean {
    const today = new Date();
    const messageDateObj = new Date(messageDate);
    return today >= messageDateObj; // Message is openable if today or later
  }
}
