import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public cartItems: number = 0

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.cartItems = res.length
    })
  }
}
