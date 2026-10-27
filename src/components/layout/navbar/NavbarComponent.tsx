"use client";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";
export interface MenuItem {
  url: string;
  name: string;
}

const NavbarComponent = () => {
  return (
    <section>
      <div className="container">
        {/* display when Desktop Screen */}
        <DesktopNavbarComponent />

        {/* display when Mobile Screen */}
        <MobileNavbarComponent />
      </div>
    </section>
  );
};

export { NavbarComponent };
