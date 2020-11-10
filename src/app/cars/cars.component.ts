import { Component, OnInit } from '@angular/core';
import { GetCarsGQL, GetCarsQuery, DeleteCarGQL, AddCarGQL, UpdateCarGQL, Car, CarDetailsFragmentDoc } from '../generated/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreObject } from '@apollo/client/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Observable<GetCarsQuery['cars']>;
  carForm: boolean;
  isNewCar: boolean;
  editCarForm: boolean;
  editedCar = {} as Car;
  newCar = {} as Car;

  constructor(carGQL: GetCarsGQL, private deleteCar: DeleteCarGQL, private addCar: AddCarGQL, private editCar: UpdateCarGQL) {
    this.cars = carGQL.watch()
      .valueChanges.pipe(map(result => result.data.cars));
  }

  showAddCarForm() {
    if (this.editedCar) {
      this.newCar = {} as Car;
    }
    this.carForm = true;
    this.isNewCar = true;
  }

  saveCar(car: Car) {
    if (this.isNewCar) {
      this.addCar.mutate(car, {
        // Adding new car to the cache so it can update the
        update(cache, { data }) {
          cache.modify({
            fields: {
              cars(existing = []) {
                const newCarRef = cache.writeFragment({
                  data: data?.createCar,
                  fragment: CarDetailsFragmentDoc,
                });
                const merged = existing.slice(0);
                merged.push(newCarRef);
                return merged;
              },
            },
          });
       },
      }).subscribe();
    }
    this.carForm = false;
    this.newCar = {} as Car;
  }

  updateCar() {
    this.editCar.mutate(this.editedCar).subscribe();
    this.editCarForm = false;
    this.editedCar = {} as Car;
  }

  cancelEdits() {
    this.editedCar = {} as Car;
    this.editCarForm = false;
  }


  cancelNewCar() {
    this.newCar = {} as Car;
    this.carForm = false;
  }

  showEditCarForm(car: Car) {
    if (!car) {
      this.carForm = false;
      return;
    }
    this.editCarForm = true;
    // Make a new object of the car that's not readOnly
    this.editedCar = { ...car };
  }

  removeCar(car: Car) {
    this.deleteCar.mutate({
      id: car.id,
    }, {
      update(cache, { data }) {
        const idToRemove =  data.removeCar.id;
        cache.modify({
          fields: {
            cars(existing: StoreObject[], { readField  }) {
              return existing.filter(storeCar => idToRemove !== readField('id', storeCar));
            },
          },
        });
     },
     }).subscribe();
  }


  ngOnInit(): void {
  }

}
