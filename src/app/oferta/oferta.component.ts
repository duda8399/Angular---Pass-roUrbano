import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    //console.log('Oferta - Array de carrinho: ', this.carrinhoService.exibirItens());

    this.route.params.subscribe((parametros: any) => {

      this.ofertasService.getOfertaPorId(parametros.id)
        .then(( oferta: Oferta ) => {
          this.oferta = oferta
        })
    });

  }

  ngOnDestroy() {}

  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta);
  }

}