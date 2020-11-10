import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};



export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type Car = {
  __typename?: 'Car';
  id: Scalars['ID'];
  brand: Scalars['String'];
  model: Scalars['String'];
  color: Scalars['String'];
  year: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Shirt = {
  __typename?: 'Shirt';
  id: Scalars['ID'];
  size: AllowedSize;
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum AllowedSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE'
}

export type Speaker = {
  __typename?: 'Speaker';
  id: Scalars['ID'];
  brand: Scalars['String'];
  model: Scalars['String'];
  power: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  product: Product;
  cars: Array<Car>;
  car: Car;
  shirts: Array<Shirt>;
  shirt: Shirt;
  speakers: Array<Speaker>;
  speaker: Speaker;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryCarArgs = {
  id: Scalars['ID'];
};


export type QueryShirtArgs = {
  id: Scalars['ID'];
};


export type QuerySpeakerArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  updateProduct: Product;
  removeProduct: Product;
  createCar: Car;
  updateCar: Car;
  removeCar: Car;
  createShirt: Shirt;
  updateShirt: Shirt;
  removeShirt: Shirt;
  createSpeaker: Speaker;
  updateSpeaker: Speaker;
  removeSpeaker: Speaker;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCarArgs = {
  createCarInput: CreateCarInput;
};


export type MutationUpdateCarArgs = {
  updateCarInput: UpdateCarInput;
};


export type MutationRemoveCarArgs = {
  id: Scalars['ID'];
};


export type MutationCreateShirtArgs = {
  createShirtInput: CreateShirtInput;
};


export type MutationUpdateShirtArgs = {
  updateShirtInput: UpdateShirtInput;
};


export type MutationRemoveShirtArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSpeakerArgs = {
  createSpeakerInput: CreateSpeakerInput;
};


export type MutationUpdateSpeakerArgs = {
  updateSpeakerInput: UpdateSpeakerInput;
};


export type MutationRemoveSpeakerArgs = {
  id: Scalars['ID'];
};

export type CreateProductInput = {
  name: Scalars['String'];
};

export type UpdateProductInput = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type CreateCarInput = {
  brand: Scalars['String'];
  model: Scalars['String'];
  color: Scalars['String'];
  year: Scalars['Int'];
};

export type UpdateCarInput = {
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type CreateShirtInput = {
  size: AllowedSize;
  color: Scalars['String'];
};

export type UpdateShirtInput = {
  size?: Maybe<AllowedSize>;
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type CreateSpeakerInput = {
  brand: Scalars['String'];
  model: Scalars['String'];
  power: Scalars['Int'];
};

export type UpdateSpeakerInput = {
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = (
  { __typename?: 'Query' }
  & { cars: Array<(
    { __typename?: 'Car' }
    & CarDetailsFragment
  )> }
);

export type AddCarMutationVariables = Exact<{
  brand: Scalars['String'];
  model: Scalars['String'];
  color: Scalars['String'];
  year: Scalars['Int'];
}>;


export type AddCarMutation = (
  { __typename?: 'Mutation' }
  & { createCar: (
    { __typename?: 'Car' }
    & CarDetailsFragment
  ) }
);

export type UpdateCarMutationVariables = Exact<{
  id: Scalars['ID'];
  brand: Scalars['String'];
  model: Scalars['String'];
  color: Scalars['String'];
  year: Scalars['Int'];
}>;


export type UpdateCarMutation = (
  { __typename?: 'Mutation' }
  & { updateCar: (
    { __typename?: 'Car' }
    & CarDetailsFragment
  ) }
);

export type DeleteCarMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCarMutation = (
  { __typename?: 'Mutation' }
  & { removeCar: (
    { __typename?: 'Car' }
    & CarDetailsFragment
  ) }
);

export type CarDetailsFragment = (
  { __typename?: 'Car' }
  & Pick<Car, 'id' | 'brand' | 'model' | 'color' | 'year'>
);

export type GetShirtsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShirtsQuery = (
  { __typename?: 'Query' }
  & { shirts: Array<(
    { __typename?: 'Shirt' }
    & ShirtDetailsFragment
  )> }
);

export type AddShirtMutationVariables = Exact<{
  size: AllowedSize;
  color: Scalars['String'];
}>;


export type AddShirtMutation = (
  { __typename?: 'Mutation' }
  & { createShirt: (
    { __typename?: 'Shirt' }
    & ShirtDetailsFragment
  ) }
);

export type UpdateShirtMutationVariables = Exact<{
  id: Scalars['ID'];
  size: AllowedSize;
  color: Scalars['String'];
}>;


export type UpdateShirtMutation = (
  { __typename?: 'Mutation' }
  & { updateShirt: (
    { __typename?: 'Shirt' }
    & ShirtDetailsFragment
  ) }
);

export type DeleteShirtMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteShirtMutation = (
  { __typename?: 'Mutation' }
  & { removeShirt: (
    { __typename?: 'Shirt' }
    & ShirtDetailsFragment
  ) }
);

export type ShirtDetailsFragment = (
  { __typename?: 'Shirt' }
  & Pick<Shirt, 'id' | 'size' | 'color'>
);

export type GetSpeakersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpeakersQuery = (
  { __typename?: 'Query' }
  & { speakers: Array<(
    { __typename?: 'Speaker' }
    & SpeakerDetailsFragment
  )> }
);

export type AddSpeakerMutationVariables = Exact<{
  brand: Scalars['String'];
  model: Scalars['String'];
  power: Scalars['Int'];
}>;


export type AddSpeakerMutation = (
  { __typename?: 'Mutation' }
  & { createSpeaker: (
    { __typename?: 'Speaker' }
    & SpeakerDetailsFragment
  ) }
);

export type UpdateSpeakerMutationVariables = Exact<{
  id: Scalars['ID'];
  brand: Scalars['String'];
  model: Scalars['String'];
  power: Scalars['Int'];
}>;


export type UpdateSpeakerMutation = (
  { __typename?: 'Mutation' }
  & { updateSpeaker: (
    { __typename?: 'Speaker' }
    & SpeakerDetailsFragment
  ) }
);

export type DeleteSpeakerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSpeakerMutation = (
  { __typename?: 'Mutation' }
  & { removeSpeaker: (
    { __typename?: 'Speaker' }
    & SpeakerDetailsFragment
  ) }
);

export type SpeakerDetailsFragment = (
  { __typename?: 'Speaker' }
  & Pick<Speaker, 'id' | 'brand' | 'model' | 'power'>
);

export const CarDetailsFragmentDoc = gql`
    fragment CarDetails on Car {
  id
  brand
  model
  color
  year
}
    `;
export const ShirtDetailsFragmentDoc = gql`
    fragment ShirtDetails on Shirt {
  id
  size
  color
}
    `;
export const SpeakerDetailsFragmentDoc = gql`
    fragment SpeakerDetails on Speaker {
  id
  brand
  model
  power
}
    `;
export const GetCarsDocument = gql`
    query GetCars {
  cars {
    ...CarDetails
  }
}
    ${CarDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class GetCarsGQL extends Apollo.Query<GetCarsQuery, GetCarsQueryVariables> {
    document = GetCarsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddCarDocument = gql`
    mutation AddCar($brand: String!, $model: String!, $color: String!, $year: Int!) {
  createCar(
    createCarInput: {brand: $brand, model: $model, color: $color, year: $year}
  ) {
    ...CarDetails
  }
}
    ${CarDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class AddCarGQL extends Apollo.Mutation<AddCarMutation, AddCarMutationVariables> {
    document = AddCarDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCarDocument = gql`
    mutation UpdateCar($id: ID!, $brand: String!, $model: String!, $color: String!, $year: Int!) {
  updateCar(
    updateCarInput: {id: $id, brand: $brand, model: $model, color: $color, year: $year}
  ) {
    ...CarDetails
  }
}
    ${CarDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class UpdateCarGQL extends Apollo.Mutation<UpdateCarMutation, UpdateCarMutationVariables> {
    document = UpdateCarDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCarDocument = gql`
    mutation DeleteCar($id: ID!) {
  removeCar(id: $id) {
    ...CarDetails
  }
}
    ${CarDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class DeleteCarGQL extends Apollo.Mutation<DeleteCarMutation, DeleteCarMutationVariables> {
    document = DeleteCarDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetShirtsDocument = gql`
    query GetShirts {
  shirts {
    ...ShirtDetails
  }
}
    ${ShirtDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class GetShirtsGQL extends Apollo.Query<GetShirtsQuery, GetShirtsQueryVariables> {
    document = GetShirtsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddShirtDocument = gql`
    mutation AddShirt($size: AllowedSize!, $color: String!) {
  createShirt(createShirtInput: {size: $size, color: $color}) {
    ...ShirtDetails
  }
}
    ${ShirtDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class AddShirtGQL extends Apollo.Mutation<AddShirtMutation, AddShirtMutationVariables> {
    document = AddShirtDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateShirtDocument = gql`
    mutation UpdateShirt($id: ID!, $size: AllowedSize!, $color: String!) {
  updateShirt(updateShirtInput: {id: $id, size: $size, color: $color}) {
    ...ShirtDetails
  }
}
    ${ShirtDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class UpdateShirtGQL extends Apollo.Mutation<UpdateShirtMutation, UpdateShirtMutationVariables> {
    document = UpdateShirtDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteShirtDocument = gql`
    mutation DeleteShirt($id: ID!) {
  removeShirt(id: $id) {
    ...ShirtDetails
  }
}
    ${ShirtDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class DeleteShirtGQL extends Apollo.Mutation<DeleteShirtMutation, DeleteShirtMutationVariables> {
    document = DeleteShirtDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSpeakersDocument = gql`
    query GetSpeakers {
  speakers {
    ...SpeakerDetails
  }
}
    ${SpeakerDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class GetSpeakersGQL extends Apollo.Query<GetSpeakersQuery, GetSpeakersQueryVariables> {
    document = GetSpeakersDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddSpeakerDocument = gql`
    mutation AddSpeaker($brand: String!, $model: String!, $power: Int!) {
  createSpeaker(createSpeakerInput: {brand: $brand, model: $model, power: $power}) {
    ...SpeakerDetails
  }
}
    ${SpeakerDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class AddSpeakerGQL extends Apollo.Mutation<AddSpeakerMutation, AddSpeakerMutationVariables> {
    document = AddSpeakerDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSpeakerDocument = gql`
    mutation UpdateSpeaker($id: ID!, $brand: String!, $model: String!, $power: Int!) {
  updateSpeaker(
    updateSpeakerInput: {id: $id, brand: $brand, model: $model, power: $power}
  ) {
    ...SpeakerDetails
  }
}
    ${SpeakerDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class UpdateSpeakerGQL extends Apollo.Mutation<UpdateSpeakerMutation, UpdateSpeakerMutationVariables> {
    document = UpdateSpeakerDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSpeakerDocument = gql`
    mutation DeleteSpeaker($id: ID!) {
  removeSpeaker(id: $id) {
    ...SpeakerDetails
  }
}
    ${SpeakerDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class DeleteSpeakerGQL extends Apollo.Mutation<DeleteSpeakerMutation, DeleteSpeakerMutationVariables> {
    document = DeleteSpeakerDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
