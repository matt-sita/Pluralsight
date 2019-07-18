//import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';

//import { IPriority } from './priority';
//import { PriorityService } from './priority.service';

//@Component({
//  templateUrl: './priority.component.html',
//  //styleUrls: ['./priority.component.css']
//})
//export class PriorityComponent implements OnInit {
//  pageTitle = 'Priorites';
//  errorMessage = '';
//  priority: IPriority | undefined;

//  constructor(private route: ActivatedRoute,
//    private router: Router,
//    private priorityService: PriorityService) {
//  }

//  ngOnInit() {
//    const param = this.route.snapshot.paramMap.get('id');
//    if (param) {
//      const id = +param;
//      this.getPriority(id);
//    }
//  }

//  getPriority(id: number) {
//    this.priorityService.getPriority(id).subscribe(
//      priority => this.priority = priority,
//      error => this.errorMessage = <any>error);
//  }

//  onBack(): void {
//    this.router.navigate(['/products']);
//  }

//}
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IPriority } from './priority';
import { PriorityService } from './priority.service';

@Pipe({
  name: 'convertToSpaces'
})

@Component({
  selector: 'pm-priority',
  templateUrl: './priority.component.html',
  //styleUrls: ['./priority.component.css']
})

export class PriorityComponent implements OnInit {
  constructor(private priorityService: PriorityService) {
  }

  pageTitle: string = 'Priority List';
  //imageWidth: number = 50;
  //imageMargin: number = 2;
  //showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPriorities = this.listFilter ? this.performFilter(this.listFilter) : this.priorities;
  }

  filteredPriorities: IPriority[];
  priorities: IPriority[] = [];
  errorMessage: string;

  onRatingClicked(message: string): void {
    this.pageTitle = 'Priority List: ' + message;
  }

  performFilter(filterBy: string): IPriority[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.priorities.filter((priority: IPriority) =>
      priority.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.priorityService.getPriorities().subscribe(
      priorities => {
        this.priorities = priorities;
        this.filteredPriorities = this.priorities;
      },
      error => this.errorMessage = <any>error
    );
  }

  //toggleImage(): void {
  //  this.showImage = !this.showImage;
  //}

}

