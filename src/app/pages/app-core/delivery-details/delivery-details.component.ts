import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface DeliveryData {
  deliveryId: string;
  client: string;
  status: string;
  address: string;
  products: string[];
  dispatchDate: string;
  deliveryDate: string;
}
@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {
  displayedColumns: string[] = ['deliveryId', 'client', 'status', 'actions'];
  dataSource!: MatTableDataSource<DeliveryData>;
  selectedDelivery: DeliveryData | undefined;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private router: Router) {}

  ngOnInit() {
    // En este punto irían peticiones a la base de datos - Obtener datos de entregas
    const deliveries: DeliveryData[] = [
      {
        deliveryId: '001',
        client: 'John Doe',
        status: 'En progreso',
        address: 'Calle 123, Ciudad',
        products: ['Producto 1', 'Producto 2'],
        dispatchDate: '2023-06-06',
        deliveryDate: '2023-06-08'
      },
    ];

    this.dataSource = new MatTableDataSource(deliveries);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToDetails(deliveryId: string) {  // se agrega el id para el query desde la base de datos, y los servicios necesarios
    this.selectedDelivery = this.dataSource.data.find(delivery => delivery.deliveryId === deliveryId);
  }
}
