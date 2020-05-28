import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  @Input() menu: any[];

  constructor(private ngbModal: NgbModal, private router: Router) { }

  onNew() {
    const modalRef = this.ngbModal.open(LoginComponent);
    modalRef.componentInstance.title = 'Login';
  }
}
