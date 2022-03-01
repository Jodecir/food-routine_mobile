import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from'@angular/fire/compat/firestore';

import { Food } from'../interfaces/food';

import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //cria a coleção (banco) no firestore
  private collectionFood: AngularFirestoreCollection<Food>;
  //instancia o firestore
  constructor(private afs: AngularFirestore) { 
    this.collectionFood = this.afs.collection<Food>('food');
  }

  listaFood() {
    //snapshotChanges().pipe = filtrar por id
    //map = mapear o prato através do id
    return this.collectionFood.snapshotChanges().pipe(map(actions=> {
      return actions.map(a => { 
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return{ id, ...data };
      });
    }));
  }

  addFood(food: Food) {
    return this.collectionFood.add(food);
  }
  
  mostraFood(id: string) {
    return this.collectionFood.doc<Food>(id).valueChanges();
  }

  editarFood(id: string, food: Food) {
    return this.collectionFood.doc<Food>(id).update(food);
  }

  excluirFood(id: string) {
    return this.collectionFood.doc(id).delete();
  }
}
