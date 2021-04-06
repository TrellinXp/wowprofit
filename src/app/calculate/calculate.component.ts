import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'wowprofit';
  value1 = 4.66;
  value2 = 0.05;
  saleValue = 13.43;
  auctionHouseFeeRounded = 0;
  totalCostPerPotion = 0;
  totalCostRounded = 0;
  profitPerPotionRounded = 0;
  numberOfSales = 1244;
  totalProfit = 0;
  totalCost = 0;

  calculate() {
    this.totalCostPerPotion = this.calculateCostPerPotion(this.value1, this.value2);
    this.totalCost = this.totalCostPerPotion * this.numberOfSales
    this.totalCostRounded = parseFloat(this.totalCost.toFixed(2));
    var autionHouseFee = 0.05 * this.saleValue;
    this.auctionHouseFeeRounded = parseFloat(autionHouseFee.toFixed(2));
    var profitPerPotion = this.saleValue - this.totalCostPerPotion - this.auctionHouseFeeRounded
    this.profitPerPotionRounded = parseFloat(profitPerPotion.toFixed(2));
    var totalProfitBeforeAHCost = (this.numberOfSales * this.saleValue) 
    var ahCost = totalProfitBeforeAHCost * 0.05;
    this.totalProfit = totalProfitBeforeAHCost - ahCost - this.totalCost;
  }

  calculateCostPerPotion(deathBlossomCost : number, runeetchedVialCost : number) {
    var pricePerPotion = 2 * deathBlossomCost + runeetchedVialCost;
    return  parseFloat(pricePerPotion.toFixed(2)); ;
  }

}
