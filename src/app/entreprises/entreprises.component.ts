import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EntrepriseService } from '../services/entreprise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entreprise } from '../requests/Entreprise';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit{

  departmentForm: FormGroup = new FormGroup({});

  constructor(private entrepriseService:EntrepriseService,private formBuilder: FormBuilder){}
  entreprises:Entreprise[] = [];
  filteredEntreprises: Entreprise[] = [];

  ngOnInit(): void {
    this.entrepriseService.getAll().subscribe(res =>{
      this.entreprises = res;
      this.filteredEntreprises = res;
    })	
    this.createForm();
  }

  createForm() {
    this.departmentForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      specialite: ['', Validators.required],
      telephone: ['', Validators.required],
      representant: ['', Validators.required]
    });
    }
  delete(id:number){
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Voulez-vous vraiment supprimer cette départment ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.entrepriseService.delete(id).subscribe((res:any) =>{
          if (res.msg){
            Swal.fire({
              icon: 'success',
              title: 'Success...',
              text: 'Supprimé avec succès !',
            })
            this.ngOnInit();
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Quelque chose s'est mal passé!",
            })
          }
        },
        err =>{
          Swal.fire({
            icon: 'warning',
            title: 'La suppression a échoué!...',
            text: err.error.message,
          })
        }
        )
      }
    }
    )
  }

  update(id:number){
    this.entrepriseService.get(id).subscribe((res:Entreprise) =>{
      /*this.idDepartment = res.id;
      this.de.patchValue({nom:res.nom});*/

    })
  }

  doFilter(event: any){
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === '') {
      this.filteredEntreprises = [...this.entreprises];
      return;
    }

    this.filteredEntreprises = this.entreprises.filter(department =>
      department.nom.toLowerCase().includes(searchTerm)
    );
  }
}
