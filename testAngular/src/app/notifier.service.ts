import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toastr:ToastrService){}
  showSuccess(message:any){
    this.toastr.success(message);
  }
}
