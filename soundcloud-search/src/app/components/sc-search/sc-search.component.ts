import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sc-search',
  templateUrl: './sc-search.component.html',
  styleUrls: ['./sc-search.component.scss']
})
export class ScSearchComponent implements OnInit {
  query: string;

  searchFormGroup = this.formBuilder.group({
    formControlSearch: [this.query, Validators.required]
  });
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  execSearch() {
    const newFolderName = this.searchFormGroup.get('formControlSearch')
      .value;
    //this.folderService.addFolder(newFolderName);
  }
}
