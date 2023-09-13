import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Yeni Tarif', 'bu bir testtir', 'https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/sihil-mahsi-yemekcom.jpg')
  ];

  constructor() {}

  ngOnInit() {

  }

}
