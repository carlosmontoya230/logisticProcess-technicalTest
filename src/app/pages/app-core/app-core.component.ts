import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabService } from 'src/app/services/tab.service';

@Component({
  selector: 'app-app-core',
  templateUrl: './app-core.component.html',
  styleUrls: ['./app-core.component.scss']
})
export class AppCoreComponent {
  activeTab: number = 0; // Propiedad para almacenar el índice del tab activo

  constructor(private tabService: TabService) {
    this.tabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
  }
}
