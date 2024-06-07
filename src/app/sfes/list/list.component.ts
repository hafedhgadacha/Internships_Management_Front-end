import { Component, OnInit } from '@angular/core';
import { SfesService } from 'src/app/services/sfes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private sfesService:SfesService){}

  sfes:any[] = [];

  ngOnInit(): void {
    this.sfesService.getAll().subscribe((res:any) =>{
      this.sfes = res;
      console.log(res);
    })	
  }

  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-modal', 'false');
      modal.setAttribute('aria-hidden', 'true');
    }
  }
}