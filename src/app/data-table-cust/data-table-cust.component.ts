import { Component, OnInit } from '@angular/core';
import { ReportingDataService } from '../services/reporting-data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-data-table-cust',
  templateUrl: './data-table-cust.component.html',
  styleUrls: ['./data-table-cust.component.css']
})
export class DataTableCustComponent implements OnInit {
  columns: string[] = ['Area', 'Subarea', 'Work', 'Hospital', 'User_Type','Day_Time','POB','Gift','Product','Attached'];
  public foods;
  public PeriodicElement;
  
  public test: string;
  subarea: string[] = ['Kharadi','Shivaji Nagar', 'Cidco'];
  hospitals: string[] = ['Bajaj Hospital','Manic Hospital','MGM Hospital'];
  areas: string[] = ['Aurangabad','Ambad','ambajogai','Pune','Mumbai'];
  addRow(){
    console.log('*******'+this.test);
   
      for (let key in this.PeriodicElement[0]) {
        
          console.log("      key:", key, "value:", this.PeriodicElement[0][key]);
      }
    


    this.PeriodicElement.splice(0,0,{Area: 'Mumbai', Subarea: 'Kharadi', Work: 'Single', Hospital: 'Balaji', User_Type:'Doctor',Day_Time:'Evening',POB:'AntiCiplha',Gift:'No Gift',Product:'AniCiphla',Attached:'No Attachment'});
  }
  constructor(private _demoService: ReportingDataService) { 
    
  }

  ngOnInit() {
    this.getFoods();
    console.log('*******');
  }
  getFoods() {
    this._demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.PeriodicElement = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods'+JSON.stringify(this.PeriodicElement))
      
    );
    
  }
}
