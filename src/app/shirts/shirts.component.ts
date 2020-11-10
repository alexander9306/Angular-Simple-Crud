import { Component, OnInit } from '@angular/core';
import { GetShirtsGQL, GetShirtsQuery, DeleteShirtGQL, AddShirtGQL, UpdateShirtGQL, Shirt, ShirtDetailsFragmentDoc, AllowedSize } from '../generated/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreObject } from '@apollo/client/core';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss']
})
export class ShirtsComponent implements OnInit {
  shirts: Observable<GetShirtsQuery['shirts']>;
  shirtForm: boolean;
  isNewShirt: boolean;
  editShirtForm: boolean;
  editedShirt = {} as Shirt;
  newShirt = {} as Shirt;
  allowedSize = AllowedSize;

  constructor(shirtGQL: GetShirtsGQL,
              private deleteShirt: DeleteShirtGQL,
              private addShirt: AddShirtGQL,
              private editShirt: UpdateShirtGQL) {
    this.shirts = shirtGQL.watch()
      .valueChanges.pipe(map(result => result.data.shirts));
  }

  showAddShirtForm() {
    if (this.editedShirt) {
      this.newShirt = {} as Shirt;
    }
    this.shirtForm = true;
    this.isNewShirt = true;
  }

  saveShirt(shirt: Shirt) {
    if (this.isNewShirt) {
      this.addShirt.mutate(shirt, {
        // Adding new shirt to the cache so it can update the
        update(cache, { data }) {
          cache.modify({
            fields: {
              shirts(existing = []) {
                const newShirtRef = cache.writeFragment({
                  data: data?.createShirt,
                  fragment: ShirtDetailsFragmentDoc,
                });
                const merged = existing.slice(0);
                merged.push(newShirtRef);
                return merged;
              },
            },
          });
       },
      }).subscribe();
    }
    this.shirtForm = false;
    this.newShirt = {} as Shirt;
  }

  updateShirt() {
    this.editShirt.mutate(this.editedShirt).subscribe();
    this.editShirtForm = false;
    this.editedShirt = {} as Shirt;
  }

  cancelEdits() {
    this.editedShirt = {} as Shirt;
    this.editShirtForm = false;
  }


  cancelNewShirt() {
    this.newShirt = {} as Shirt;
    this.shirtForm = false;
  }

  showEditShirtForm(shirt: Shirt) {
    if (!shirt) {
      this.shirtForm = false;
      return;
    }
    this.editShirtForm = true;
    // Make a new object of the shirt that's not readOnly
    this.editedShirt = { ...shirt };
  }

  removeShirt(shirt: Shirt) {
    this.deleteShirt.mutate({
      id: shirt.id,
    }, {
      update(cache, { data }) {
        const idToRemove =  data.removeShirt.id;
        cache.modify({
          fields: {
            shirts(existing: StoreObject[], { readField  }) {
              return existing.filter(storeShirt => idToRemove !== readField('id', storeShirt));
            },
          },
        });
     },
     }).subscribe();
  }


  ngOnInit(): void {
  }

}
