import { Component, OnInit } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {PetsService} from '../services/pets.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: Pet[];
  action = 'list';
  pet: Pet = {nombre: '', tipo: ''};
  constructor(private servicioPets: PetsService) {
    this.servicioPets.getPets().subscribe((data: Pet[]) => {
      console.log(data);
      this.pets = data;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  emojiPet(tipo){
    switch (tipo) {
      case 'perro':{
        return '🐶';
      }
      case 'gato':{
        return '🐱';
      }
      case 'conejo':{
        return '🐰';
      }
    }
    return '🌵';
  }

  guardarMascota() {
    this.servicioPets.savePet(this.pet).subscribe((data: Pet) => {
      console.log(data);
      this.pets.push(data);
      this.action = 'list';
      this.pet = {nombre: '', tipo: ''};
    }, (error) => {
      console.log(error);
    });
    /*this.servicioPets.savePet(this.pet).then((data) => {
      console.log('Mascota Creada');
      this.action = 'list';
      this.pet = {nombre: '', tipo: ''};
    });*/
  }
  changeAction(pet) {
    console.log(pet);
    this.action = 'update';
    this.pet = pet;
  }
  actualizarMascota() {
    /*this.servicioPets.updatePet(this.pet).then(() => {
      console.log('Guardo los cambios');
      this.pet = {nombre: '', tipo: ''};
      this.action = 'list';
    });*/

    this.servicioPets.updatePet(this.pet).subscribe((data) => {
      console.log(data);
      this.pet = {nombre: '', tipo: ''};
      this.action = 'list';
    }, (error) => {
      console.log(error);
    });
  }
  eliminarMascota(key) {
    this.servicioPets.deletePet(key).then(() => {
      console.log('Eliminado');
      alert('Eliminado');
    });
  }
}
