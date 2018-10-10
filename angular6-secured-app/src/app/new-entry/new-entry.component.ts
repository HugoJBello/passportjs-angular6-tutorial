import { Component, OnInit } from '@angular/core';
import { BlogEntry, EntriesService } from '../entries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  constructor(private router: Router, private entriesService: EntriesService) { }
  entry: BlogEntry = { title: 'enter title', content: 'enter content', tags: 'enter tags' };
  ngOnInit() {
  }
  async submmit() {
    await this.entriesService.saveEntry(this.entry);
    this.router.navigate(['entries']);

  }

}
