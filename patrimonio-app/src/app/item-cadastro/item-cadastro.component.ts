import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [
    {etiqueta: 'AA1234', descricao: 'Notebook', dataAquisicao: new Date()},
    {etiqueta: 'BB5678', descricao: 'Mouse', dataAquisicao: new Date()}
  ]

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl){
    console.log(frm.value);
    this.itemService.cadastrar(frm.value).subscribe(() => {
      frm.reset();
      this.consultar();  
    });
  }

}
