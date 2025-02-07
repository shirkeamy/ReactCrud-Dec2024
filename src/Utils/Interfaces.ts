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