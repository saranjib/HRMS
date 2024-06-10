import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  getApiUrl() {
    throw new Error('Method not implemented.');
  }
  public ApiUrl = 'https://biller.koiv.in/api/'; 
  public ApiUrlLogin = 'https://ecomidentity.koiv.in/api/'; 
  public ApiUrlemail='https://apitest.koiv.in/api/'
  
  /** Authentication Url's **/
  public readonly getEmp = "EmpPersDtls";
  public readonly dept = "Department";
  public readonly getDepartmentDeleteMultiple = " Department/DeleteMultiple";
  public readonly getCountry = "Country";
  public readonly getContact = "Contact";
  public readonly getAddress ="Address";
  public readonly getDesig ="Designation"; 
  public readonly getRole = "Role";
  public readonly office = "Office"; 
  public readonly employment = "Employment";
  public readonly getEducation = "Education";
  public readonly getJobTitle = "JobTitle";
  public readonly getIdentity = "EmpIdentity"; 
  public readonly  getJob ="JobTitle";
  public readonly  getDepartment ="Department";
  public readonly  getDesignation="Designation";
  public readonly getFamily = "EmpFamily";
  public readonly getUser = "User";
  public readonly getWorkType = "WorkType";
  public readonly getBank = "Bank";
  public readonly family = "Family";
  public readonly getEmpType = "EmpType";
  public readonly getState = "State";
  public readonly  Family ="EmpFamily";
  public readonly  Employment="Employment"; 
 //*************Attendance************* */
  public readonly getManualAttendance = "ManualAttendance";
  public readonly getEmpBankDetail = "EmpBankAccount";
  // for sending the email
  public readonly sendemail="OnBoardingLink"
}