import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, getDocs } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-us-so-far',
  templateUrl: './us-so-far.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./us-so-far.component.scss'],
})
export class UsSoFarComponent {
  posts: { image: string; caption: string }[] = [];
  newPostCaption: string = '';
  newPostImage: string | null = null;
  isPopupOpen: boolean = false;
  imgbbApiKey: string = '60b7d40f9ccd865e0d8f2e5e12d4d8c9';

  constructor(private firestore: Firestore, private http: HttpClient) {
    this.loadPost()
  }

  togglePopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }
  loadPost(): void { 
    const postsCollection = collection(this.firestore, 'posts');
    getDocs(postsCollection).then((querySnapshot) => {
      this.posts = []; // Clear current posts before adding new ones

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        this.posts.push({
          image: postData['image'],  // Image URL (or base64) from Firestore
          caption: postData['caption'] // Caption from Firestore
        });
      });
    }).catch((error: any) => {
      console.error("Error fetching posts: ", error); // Handle error if fetching posts fails
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      this.http
        .post(`https://api.imgbb.com/1/upload?key=${this.imgbbApiKey}`, formData)
        .subscribe(
          (response: any) => {
            if (response.success) {
              this.newPostImage = response.data.url; // Get image URL from ImgBB
            }
          },
          (error) => console.error('Error uploading image:', error)
        );
    }
  }

  addPost(): void {
    if (this.newPostImage && this.newPostCaption) {
      const postsCollection = collection(this.firestore, 'posts');
      addDoc(postsCollection, {
        image: this.newPostImage,
        caption: this.newPostCaption,
        createdAt: new Date()
      })
        .then(() => {
          this.newPostCaption = '';
          this.newPostImage = null;
          this.loadPost();
          this.togglePopup();
        })
        .catch((error) => console.error('Error adding post:', error));
    } else {
      alert('Please add both an image and a caption.');
    }
  }
}
