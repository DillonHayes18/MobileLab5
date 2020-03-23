import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  years: number;
  calaulateinterest(): void {
  this.Total= this.iService.calaulateinterest(
  this.years,this.interestRate, this.Amount);
  }
}

