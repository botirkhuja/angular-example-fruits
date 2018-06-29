import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unknown-page',
  templateUrl: './unknown-page.component.html',
  styleUrls: ['./unknown-page.component.css']
})
export class UnknownPageComponent implements OnInit {
  incomingMessageToShow: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.incomingMessageToShow = this.route.snapshot.data.messageToShow;
  }

}
