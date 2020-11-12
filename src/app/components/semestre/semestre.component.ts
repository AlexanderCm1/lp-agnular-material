import { Component, OnInit } from '@angular/core';

import {Semestre} from '../../models/semestre';

import {SemestreService} from '../../services/semestre.service';

import {Global} from '../../services/global';


import Swal from 'sweetalert2';



/*
export interface PeriodicElement {
   semestre_id:number;
   nombre:string;
   estado:string;
}*/
@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css'],
  providers: [SemestreService]
})
export class SemestreComponent implements OnInit {
  public title:string;
  public semestre: Semestre;
  public semestres: Semestre[];

  displayedColumns: string[] = ['semestre_id', 'nombre','editar','estado'];

  constructor(
    private _semestreService:SemestreService

  ) {
    this.title = "Agregar semestre";
    this.semestre = new Semestre(null,'','');
    

  }

  ngOnInit(): void {
   this.getSemestre();
  }
  onSubmit(form){
    console.log(this.semestre);
    this._semestreService.crearSemestre(this.semestre).subscribe(
      response => {

        Swal.fire('Creado!','Se ha creado correctamente','success').then(function(){
          window.location.reload();
        });
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    
    )
  }

  getSemestre(){
    this._semestreService.getSemestres().subscribe(
      /*(data) =>{
        this.semestre = data['CURSOR_SEMESTRE']
        console.log(this.semestre);
      }*/
      response =>{
        if(response.CURSOR_SEMESTRE)
              this.semestres = response.CURSOR_SEMESTRE;
              //console.log(response['CURSOR_SEMESTRE']);
              console.log(response.CURSOR_SEMESTRE);
      },
      
    );
  }
  deleteSemestre(id){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras deshacer este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._semestreService.deleteSemestre(id).subscribe(
          response =>{
            if(response == 0){
              Swal.fire(
                'Eliminado!',
                'Semestre eliminado con exito',
                'success'
              ).then(function(){
                window.location.reload();
              })
            }
            
          },
          error => {
    
          }
    
        )
        
      }
    })

    /*
    this._semestreService.deleteSemestre(id).subscribe(
      response =>{
        console.log(response);
        
        if(response.CURSOR_SEMESTRE){
          this._router.navigate(['/delete'])
        }
        
      },
      error => {

      }

    )*/
  }
}
