import { Component, OnInit } from '@angular/core';
import { CoreService } from "../../core/core.service";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.css']
})
export class ImageHandlerComponent implements OnInit {

  constructor(private service: CoreService) { }

  ngOnInit() {
  }

  upImage(event){
    let element = event.target;
    if (element.files.length > 0) {
      let dataForm = new FormData();
      dataForm.append('file', element.files[0])
      // this.service.updateImage(dataForm).subscribe(data => {
      // let getValue = data.json();
      // }, error => console.log(error.message));
      console.log(dataForm);
      
    }
  }
  

}
