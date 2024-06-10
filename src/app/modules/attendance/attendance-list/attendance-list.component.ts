import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttendanceService } from '../attendance-service/attendance.service';
@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent {
[x: string]: any;
  showTabs: boolean = false;
  showTabs1: boolean = false;
  showTabs3: boolean = false;
  manualattendList: any[] = []; // Initialize manual attendance list array
  manualattendList2: any[] = []; // Initialize manual attendance list array
  dataSource: any;
  dataSource2: any;
  
  selectedUserId: number | null = null; 
  constructor(private manualAttendance: AttendanceService) {} // Inject the ManualAttendanceService

  ngOnInit() {
    this.getManualAttendanceList(); // Call the function to fetch manual attendance data when the component initializes
    this.getManualAttendanceList2(); // Call the function to fetch manual attendance data when the component initializes
  }
  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  toggleTabs1() {
    this.showTabs1 = !this.showTabs1;
  }

  toggleTabs3() {
    this.showTabs3 = !this.showTabs3;
  }


  addDepartment() {
    this.showTabs = false;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  departmrntForm!: FormGroup



  list1 = [
    { date: '01' },
    { date: '02', },
    {
      date: '03',
    },
    {
      date: '04',
    },
    {
      date: '05',
    },
    {
      date: '06',
    },
    {
      date: '07',
    },
    {
      date: '08',
    },
    {
      date: '09',
    },
    {
      date: '10',
    },
    {
      date: '11',
    },
    {
      date: '12',
    },
    {
      date: '13',
    },
    {
      date: '14',
    },
    {
      date: '15',
    },
    {
      date: '16',
    },
    {
      date: '17',
    },
    {
      date: '18',
    },
    {
      date: '19',
    },
    {
      date: '20',
    },
    {
      date: '21',
    },
  ];

  listPresent = [
    {
      id: '1',
      Attendance: 'P',

    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    },
    {
      id:'2',
      Attendance:'P',
    }
  ];

  listAbusent = [
    {
      id: '1',
      Attendance: 'A',

    },
  ];
 

  listHoliday = [
    {
      id: '1',
      Attendance: 'H',
    },
  ];

  leaveHeading = [
    {
      Total: 'Total Leaves',
      Used: 'Used Leves',
      Saved: 'Saves Leaves',
      Actions: 'Actions',
    }
  ];
  Leavelist = [
    {
      totalLeave: '25',
      usedLeave: '12',
      saveLeave: '13',
    }
  ];
  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      
      return tokenPayload['UserId'] || null;
    }
    return null;
  }
  getManualAttendanceList() {

    debugger;
    const userId = this.getUserId() || '';
    if (!userId) {
      console.error('Data Not Found.');
      return;
    }
  
    this.manualAttendance.getManualAttendanceWithId(userId).subscribe(res => {
      this.manualattendList = res;
      this.dataSource.data = this.manualattendList;
    });
  }
  getManualAttendanceList2() {
    debugger;
    const userId = this.getUserId() || '';
    if (!userId) {
        console.error('Data Not Found.');
        return;
    }

    this.manualAttendance.getManualAttendanceWithId(userId).subscribe(res => {
        console.log(res);
        // Create an object to store merged entries
        const mergedList = {};
        res.forEach(entry => {
            // Check if user ID already exists in merged list
            if (mergedList.hasOwnProperty(entry.userId)) {
                // If user ID exists, merge the entry into existing entry
                Object.assign(mergedList[entry.userId], entry);
            } else {
                // If user ID doesn't exist, add entry to merged list
                mergedList[entry.userId] = entry;
            }
        });
        // Convert merged object back to array
        this.manualattendList2 = Object.values(mergedList);
        console.log(this.manualattendList2)
        this.dataSource2.data = this.manualattendList2;
    });
}

  selectedEmpRegId: number | null = null; // Initialize selectedEmpRegId as null

  selectUser(empRegId: number): void {
    this.selectedEmpRegId = empRegId; // Update selectedEmpRegId with the clicked empRegId
  }
  isFirstPunchIn(attendance: any): boolean {
    // Get the latest punch-in time for the user
    const latestPunchIn = this.getLatestPunchIn(attendance.empRegId);
    
    // Check if the current attendance is a punch-in entry and if it matches the latest punch-in time
    return attendance.type === 'Punch In' && attendance.manualAttendanceId === latestPunchIn?.manualAttendanceId;
  }
  
  isLastPunchOut(attendance: any): boolean {
    // Get the latest punch-out time for the user
    const latestPunchOut = this.getLatestPunchOut(attendance.empRegId);
    
    // Check if the current attendance is a punch-out entry and if it matches the latest punch-out time
    return attendance.type === 'Punch Out' && attendance.manualAttendanceId === latestPunchOut?.manualAttendanceId;
  }
  
  getLatestPunchIn(empRegId: number): any {
    // Filter punch-in entries for the user and get the latest one
    const punchIns = this.manualattendList.filter(entry => entry.empRegId === empRegId && entry.type === 'Punch In');
    return punchIns.length > 0 ? punchIns.reduce((prev, current) => (prev.date + ' ' + prev.time > current.date + ' ' + current.time) ? prev : current) : null;
  }
  
  getLatestPunchOut(empRegId: number): any {
    // Filter punch-out entries for the user and get the latest one
    const punchOuts = this.manualattendList.filter(entry => entry.empRegId === empRegId && entry.type === 'Punch Out');
    return punchOuts.length > 0 ? punchOuts.reduce((prev, current) => (prev.date + ' ' + prev.time > current.date + ' ' + current.time) ? prev : current) : null;
  }
  
  
  
   calculateTimeDifference(punchIn: string, punchOut: string):string {
    debugger
    // Split the time strings to separate hours, minutes, and AM/PM
    const punchInParts = punchIn.split(/:|\s/);
    const punchOutParts = punchOut.split(/:|\s/);

    // Parse hours, minutes, and AM/PM
    let punchInHours = parseInt(punchInParts[0], 10);
    let punchOutHours = parseInt(punchOutParts[0], 10);
    const punchInMinutes = parseInt(punchInParts[1], 10);
    const punchOutMinutes = parseInt(punchOutParts[1], 10);
    const punchInAMPM = punchInParts[2].toUpperCase();
    const punchOutAMPM = punchOutParts[2].toUpperCase();

    // Adjust hours for PM if necessary
    if (punchInAMPM === 'PM' && punchInHours !== 12) {
        punchInHours += 12;
    }
    if (punchOutAMPM === 'PM' && punchOutHours !== 12) {
        punchOutHours += 12;
    }

    // Create Date objects with a common date (e.g., today's date)
    const today = new Date();
    const punchInTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), punchInHours, punchInMinutes);
    let punchOutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), punchOutHours, punchOutMinutes);

    // Adjust punchOutTime if it's before punchInTime on the same day
    if (punchOutTime < punchInTime) {
        punchOutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, punchOutHours, punchOutMinutes);
    }

    // Calculate the time difference in milliseconds
    const timeDifferenceMs = punchOutTime.getTime() - punchInTime.getTime();

    // Convert milliseconds to hours and minutes
    const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));

    // Format the result
    const formattedDifference = `${hours}h ${minutes}m`;

    return formattedDifference; // Return formatted time difference
}

  formatDate(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Extract year, month, and day from the date object
    const year = date.getFullYear();
    const month = months[date.getMonth()];// Adding 1 because months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
}
  

}
