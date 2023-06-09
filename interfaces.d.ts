import { StringLiteral } from "typescript";

interface User {
    FirstName:string;
    LastName:string;
    Mobile:string;
    Email:string;
    address: {
      streetno: number | string;
      street: string;
      postalcode: string | number;
      city: string;
      country: string;
    };
    verified:boolean;
    petowner?:{
        petname:string;
        breed:string;
        temperment:string;
    };
}