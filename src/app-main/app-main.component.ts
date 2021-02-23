// commons
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  public title = 'Welcome to WoWruRU Project';

  constructor() {}

  public ngOnInit(): void {}
}
