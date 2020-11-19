import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.css']
})
export class CompaniesAddComponent implements OnInit {

  companyRef = new FormGroup({
    _id: new FormControl(),
    name: new FormControl
  })
  companies: Company[];
  result:string;
  constructor(private companyService: CompanyService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }

  ngOnInit(): void {
  }
  storeCompanyDetails():void{
    //console.log(this.productRef.value);
    this.companyService.addCompany(this.companyRef.value).subscribe(data=>this.result=data.msg);
    this._location.back();
  }
  goBack(): void{
    this._location.back();
  }
}
