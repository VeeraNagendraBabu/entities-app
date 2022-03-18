import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data!: any;
  constructor(private backendService: BackendApiService) { }

  ngOnInit(): void {
    this.data = this.backendService.getEntries;
  }

}
