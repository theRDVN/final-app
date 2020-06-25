import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit{

  @Input() menu: any[];
  private roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private router: Router, private ngbModal: NgbModal, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }

  onNew() {
    const modalRef = this.ngbModal.open(LoginComponent);
    modalRef.componentInstance.title = 'Login';
  }

  logout() {
    this.tokenStorageService.singOut();
    window.location.reload();
  }
}
