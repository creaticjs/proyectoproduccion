import { Injectable } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {HttpClient} from '@angular/common/http';
import {FirebaseDatabase} from '@angular/fire';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

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
    return this.http.get(environment.apiurl+'/pets');
  }

  savePet(pet: any) {
    return this.http.post(environment.apiurl+'/createpet', pet);
  }
  updatePet(pet: any) {
    /*return this.pets.update(pet.key, pet);*/
    const p = {id: pet._id, nombre: pet.nombre, tipo: pet.tipo};
    return this.http.post(environment.apiurl+'/updatepet', p);
  }
  deletePet(key) {
    return this.pets.remove(key);
  }
}
