import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from'@angular/fire/compat/firestore';

import { Post } from'../interfaces/post';

import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public collectionName = "post";
  private collectionPost: AngularFirestoreCollection<Post>;
  
  constructor(private afs: AngularFirestore) { 
    this.collectionPost = this.afs.collection<Post>(this.collectionName);
  }

  listaPost() {
    //snapshotChanges().pipe = filtrar por id
    //map = mapear o prato através do id
    return this.collectionPost.snapshotChanges().pipe(map(actions=> {
      return actions.map(a => { 
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return{ id, ...data };
      });
    }));
  }

  addPost(post: Post) {
    return this.collectionPost.add(post).
    then((res => {
      console.log('Postagem enviada');
    }));
  }
  
  mostraPost(id: string) {
    return this.collectionPost.doc<Post>(id).valueChanges();
  }

  editarPost(id: string, post: Post) {
    return this.collectionPost.doc<Post>(id).update(post);
  }

  excluirPost(id: string) {
    return this.collectionPost.doc(id).delete();
  }
}
