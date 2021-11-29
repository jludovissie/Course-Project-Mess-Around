import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bloglibrary',
  templateUrl: './bloglibrary.component.html',
  styleUrls: ['./bloglibrary.component.css']
})
export class BloglibraryComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute  ) { }

  ngOnInit() {
  }
  onForm(){
    this.router.navigate(['blog'], {relativeTo: this.route})
  }
}