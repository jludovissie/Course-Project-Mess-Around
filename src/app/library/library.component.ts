import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Pitch } from '../pitch.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() pitch: Pitch;
  myPitches: Pitch[] = [];
  value;



  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.myPitches = this.libraryService.getPitches()
  }
  slider(){
    this.value = document.getElementById("myRange")
  }

}