import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:
  [RouterOutlet,
  InputTextModule,
  FloatLabelModule,
  ReactiveFormsModule,
  FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})


export class LoginComponent {

  formulario: FormGroup;


  constructor(
    route: ActivatedRoute,
    private builder: FormBuilder,){

    this.formulario = this.builder.group({
      id: [null],
      usuario: ['', Validators.required],
      })
    }
}
