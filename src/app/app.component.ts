import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wowprofit';
  value1 = 6.1;
  value2 = 0.05;
  saleValue = 17.49;
  auctionHouseFeeRounded = 0;
  totalCostPerPotion = 0;
  profitPerPotionRounded = 0;
  numberOfSales = 1244;
  totalProfit = 0;
  totalCost = 0;

  calculate() {
    this.totalCostPerPotion =  2 * this.value1 + this.value2;
    this.totalCost = this.totalCostPerPotion * this.numberOfSales;
    var autionHouseFee = 0.05 * this.saleValue;
    this.auctionHouseFeeRounded = parseFloat(autionHouseFee.toFixed(2));
    var profitPerPotion = this.saleValue - this.totalCostPerPotion - this.auctionHouseFeeRounded
    this.profitPerPotionRounded = parseFloat(profitPerPotion.toFixed(2));
    var totalProfitBeforeAHCost = (this.numberOfSales * this.saleValue) 
    var ahCost = totalProfitBeforeAHCost * 0.05;
    this.totalProfit = totalProfitBeforeAHCost - ahCost - this.totalCost;
  }
}
