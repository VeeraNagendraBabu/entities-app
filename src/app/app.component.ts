import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data!: any[];
  constructor(private backendService: BackendApiService) { }

  ngOnInit(): void {
  this.backendService.getEntries().subscribe((data)=>{
    this.data = data.entries.filter((x: { Cors: string; })=>x.Cors=='yes');
  });
  }

}

