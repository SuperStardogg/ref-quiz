import { Component, OnInit } from '@angular/core';
import { FilterResultsService } from 'src/app/services/filter-results.service';

@Component({
  selector: 'filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.scss']
})
export class FilterResultsComponent implements OnInit {

  searchText: string;

  characters: string[];

  constructor(private filterResultsService: FilterResultsService) { 
    this.searchText = '';
    this.characters = [];
  }

  ngOnInit(): void {
    this.filterResultsService.getCategories().subscribe(
      res => this.characters = res,
      err => console.log(err)
    )
  }

}
