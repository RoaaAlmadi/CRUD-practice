import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  itemForm: FormGroup;

  constructor(private itemService: ItemService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.listItems()
    });
  }

  listItems(){
    this.itemService.getItems().subscribe(data =>{
      this.items = data.map(res =>{
        return{
          id: res.payload.doc.id,
          title: res.payload.doc.data()['title'],
          description: res.payload.doc.data()['description'],
       }
      })
    })
  }

  deleteItem(item: Item){
    this.itemService.deleteItem(item.id);
  }

  editItem(item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  createItem() {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    })
   }

}
