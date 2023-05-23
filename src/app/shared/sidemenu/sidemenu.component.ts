import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  appitems: any = [];

  config = {
    paddingAtStart: true,
    classname: "side-nav-menu",
    fontColor: "#000",
    selectedListFontColor: "#267fff",
    // backgroundColor: "#dad6ff",
    highlightOnSelect: true,
    useDividers: false,
    collapseOnSelect: true,
  };
  constructor() { }

  ngOnInit(): void {

    this.appitems = [
			{
				label: "Dashboard",
				link: "/admin-dashboard",
				icon: "leaderboard"
			},
			{
			  label: "services",
			  link: "/services",
			  icon: "pets"
			},			
			{
				label: "Users",
				link: '/all-users',
				icon: "group",
			},
			{
			  label: "Survey",
			  link: "/survey",
			  icon: "assignment"
			},
			{
			  label: "My profile",
			  link: "/my-profile",
			  icon: "face"
			},
			
		];
  }

}
