import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpdetailssaveService } from './empdetailssave.service';





@Component({
  selector: 'app-empdetailssave',
  templateUrl: './empdetailssave.component.html',
  styleUrls: ['./empdetailssave.component.scss'],
})

export class EmpdetailssaveComponent implements OnInit {
    public entity2:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        empid: '',
        empname: '',
        empage: '',
        empstatus: '',
    }




    constructor (
        private empdetailssaveService: EmpdetailssaveService,
    ) { }

    ngOnInit() {
        this.entity2.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}