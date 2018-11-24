import { Injectable } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {HttpClient} from '@angular/common/http';
import {FirebaseDatabase} from '@angular/fire';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets: AngularFireList<Pet[]>;
  coby: AngularFireObject<Pet>;
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.pets = this.db.list('/pets');
  }

  getPets() {
    //return this.db.list('/pets');
    return this.http.get('http://localhost:3000/pets');
  }

  savePet(pet: any) {
    return this.http.post('http://localhost:3000/createpet', pet);
  }
  updatePet(pet: any) {
    /*return this.pets.update(pet.key, pet);*/
    const p = {id: pet._id, nombre: pet.nombre, tipo: pet.tipo};
    return this.http.post('http://localhost:3000/updatepet', p);
  }
  deletePet(key) {
    return this.pets.remove(key);
  }
}
