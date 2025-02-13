export interface IEmployee {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    isActive: boolean;
    emailId: string;
    countryId: number;
    stateId: number;
    cityId: number;
    address: string;
}

export interface IEmployees {
    employeeId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    isActive: boolean;
    emailId: string;
    countryId: number;
    stateId: number;
    cityId: number;
    address: string;
}

export interface IDropdownData {
    value: string;
    text: string;
}

export interface IContries {
    countryId: number;
    countryName: string;
}

export interface IStates {
    stateId: number;
    stateName: string;
}

export interface ICities {
    cityId: number;
    cityName: string;
}

export interface ILoginBody {
    emailId: string;
    password: string;
}

export interface ILoginMaster {
    loginId: number;
    userName: string;
    userPassword: string;
    createdDate: Date;
    createdBy: string;
}