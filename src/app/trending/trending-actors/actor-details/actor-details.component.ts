import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  actorId: number = 0;
  actorDetails: any;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _DetailsService: DetailsService, private _ActivatedRoute: ActivatedRoute) {
    this.actorId = this._ActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this._DetailsService.getActorDetails(this.actorId).subscribe((data: any) => {
      this.actorDetails = data;



    })

  }

}
