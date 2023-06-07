import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TabService } from '../../../services/tab.service';

interface DeliveryData {
  deliveryId: string;
  client: string;
  status: string;
}
@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
  displayedColumns: string[] = ['deliveryId', 'client', 'status', 'actions'];
  dataSource!: MatTableDataSource<DeliveryData>;
  selectedDelivery!: DeliveryData | undefined;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    // En este punto irían peticiones a la base de datos - Obtener datos de entregas
    const deliveries: DeliveryData[] = [
      { deliveryId: '001', client: 'John Doe', status: 'En progreso' },
      { deliveryId: '002', client: 'Alice Smith', status: 'Entregado' },
      { deliveryId: '003', client: 'Bob Johnson', status: 'Pendiente' },
      { deliveryId: '004', client: 'Carlos Yepes', status: 'Pendiente' },
      { deliveryId: '005', client: 'Martha Montoya', status: 'En proceso' },
      { deliveryId: '006', client: 'Emmanuel Yepes', status: 'Pendiente' },
      { deliveryId: '007', client: 'Jessica Yepes', status: 'Pendiente' },
    ];

    this.dataSource = new MatTableDataSource(deliveries);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cambiarTab() {
    this.tabService.setActiveTab(1); // Cambia el índice a 1 para el segundo mat-tab
  }

}


