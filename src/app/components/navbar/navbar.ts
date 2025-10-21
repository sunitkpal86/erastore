import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isOpen = false;
  dropdownOpen = false;
  showDropdown = false;
  scrolled = false; // for scroll effect

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
