import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShorturlService } from '../shared/shorturl.service';
import { Shorturl } from '../shared/shorturl.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shorturl-form',
  templateUrl: './shorturl-form.component.html',
  styles: [
  ]
})
export class ShorturlFormComponent implements OnInit {

  constructor(public service: ShorturlService,
    private toastr: ToastrService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.createShortUrl(form);
  }

  createShortUrl(form: NgForm) {
    this.service.postShortUrl().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Your short URL has been created successfully.', 'Short Url');
        this.route.navigate(['/shorturls']);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            if (err.error?.errors['Alias']) {
              const aliasErrorMessage = err.error.errors['Alias'];
              form.controls.alias.setErrors({ serverError: aliasErrorMessage })
              this.toastr.error(aliasErrorMessage, 'Error');
            }
          }
          else {
            this.toastr.error(err.message, 'Error');
          }
        } else {
          this.toastr.error('Your URL could not be shortened.', 'Unknow Error');
        }
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
    this.service.formData = new Shorturl();
  }

}
