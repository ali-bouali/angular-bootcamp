import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  username: string = '';
  queryParamUsername= '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['username']) {
      this.username = this.activatedRoute.snapshot.params['username'];
    }
    if (this.activatedRoute.snapshot.queryParams['param1']) {
      this.queryParamUsername = this.activatedRoute.snapshot.queryParams['param1'];
    }
    console.log(this.activatedRoute);
  }



}
