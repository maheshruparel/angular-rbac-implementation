import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthorised } from './directives/isAuthorised';
import { PermissionsService } from './services/permissions.service';
import { UserService } from './services/user.service';
import { CanAccessDirective } from './directives/can-access.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IsAuthorised,CanAccessDirective],
  providers:[PermissionsService,UserService],
  exports: [IsAuthorised,CanAccessDirective]
})
export class RbacModule { }
