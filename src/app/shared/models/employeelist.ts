export interface employeeList{  
    empPersDtlId:any
    // isActive: true
    // createdBy: string
    // updatedBy: string
    fullName: string
    dob: Date
    gender: 0
    bloodGroup: 0
    reliegion: 0
    // country: 0
    fatherorHusbandName: string
    // joiningDate: Date
    // designation: 0
    // department: 0
    // manager: 0
    // employeeId: 33
    // role: 0
    maritalStatus: 0
    dateofMarriage: Date
    mobileNo: string
    email: string
    // remarks: string 
}
export interface departmentList {
    "deptId": Int32Array,
    "departmentName": String,
    "remarks": String,
    "deptIds": null,
    "isActive": Boolean,
    "createdOn": Date,
    "createdBy": String,
    "updatedBy": String,
    "updatedOn":Date
}
export interface designationList {
    "desigId": Int32Array,
    "deptId": Int32Array,
    "designationName": String,
    "remarks": String,
    "desigIds": null,
    "isActive": true,
    "createdOn": Date,
    "createdBy": String,
    "updatedBy": String,
    "updatedOn":Date
}
export interface roleList {
    "roleId": Number,
    "roleName": string,
    "remarks": string,
    "roleIds": null,
    "isActive": true,
    "createdOn": Date,
    "createdBy": string,
    "updatedBy": string,
    "updatedOn":Date
}
export interface officeList {
    "officeId": Int32Array,
    "officeName": string,
    "shortCode": string,
    "address": string,
    "landmark": string,
    "state": string,
    "city": string,
    "locality": string,
    "phoneNumber": string,
    "alternateNo": string,
    "email": string,
    "officeManager": string,
    "omContactNo": string,
    "omEmail": string,
    "zipCode": string,
    "registrationNo": string,
    "cloth": string,
    "cinNo": string,
    "gstinNo": string,
    "bankDetail": string,
    "inFavourof": string,
    "bankAccountNumber": string,
    "paymentMode": string,
    "logo": string,
    "remarks": string,
    "clientId": 0,
    "officeIds": null,
    "isActive": true,
    "createdOn": "2024-03-14T17:44:52.16",
    "createdBy": string,
    "updatedBy": string,
    "updatedOn": "2024-03-14T17:44:52.16"
}
export interface workTypeList {
    "workTypeId": Int32Array,
    "workTypeName": string,
    "remarks": null,
    "workTypeIds": null,
    "isActive": boolean,
    "createdOn": Date,
    "createdBy": string,
    "updatedBy": string,
    "updatedOn":Date
}
export interface workShiftList {
    "workShiftId": Int32Array,
    "workShiftName": string,
    "workFrom": string,
    "workTo": string,
    "totalHours": string,
    "remarks": string,
    "workShiftIds": null,
    "isActive": boolean,
    "createdOn": Date,
    "createdBy": string,
    "updatedBy": string,
    "updatedOn":Date
}

export interface roleList {
    "roleId": Number,
    "roleName": string,
    "remarks": string,
    "roleIds": null,
    "isActive": true,
    "createdOn": Date,
    "createdBy": string,
    "updatedBy": string,
    "updatedOn":Date
}export interface familyList{
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    familyId: 0,
    familyName: string,
    remarks: string,
    
  } 
  export interface bankList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    bankId: 0,
    bankName: string,
    remarks: string,
 
 }

//  export interface empbankList {

//     isActive: true,
//     createdOn: Date,
//     createdBy: string,
//     updatedBy: string,
//     updatedOn: Date,
//     bankAccountId: 0,
//     empRegId: 0,
//     bankName: string,
//     ifscCode: string,
//     accountNo: string,
//     accountHolderName: string,
//     branchName: string,
//     bankLocation: string,
//     attachment: string,
//     remarks: string
// }
//#region Added by Bajpai  on 19 April 2024
export interface certInterface{
    skill: string,
    exp: string,
    isSelected: boolean,
    isDropDownOpen:boolean
}

export default interface educationInterface{
    level: string,
    institute: string,
    major: string,
    year: string,
    score: string,
    startDate: any,
    endDate: any,
    isSelected: boolean,
    isDropDownOpen:boolean
}
export interface langInterface{
    lang: string,
    skill: string,
    fluency: string,
    isSelected: boolean,
    isDropDownOpen:boolean
}
export interface skillInterface{
    skill: string,
    exp: string,
    isSelected: boolean,
    isDropDownOpen:boolean
}
export interface workExpInterface{
    company: string,
    jobTitle: string,
    fromDate: any,
    toDate: any,
    isSelected: boolean,
    isDropDownOpen:boolean
}

//#endregion