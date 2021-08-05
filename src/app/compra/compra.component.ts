import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  dadosPessoaisFormGroup!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.dadosPessoaisFormGroup = this.builder.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

}
