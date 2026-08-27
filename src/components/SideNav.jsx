// import { useState } from "react";

// import {
//   User,
//   BookOpen,
//   Briefcase,
//   Algorithm,
//   Folder,
//   Mail,
// } from "pixelarticons/react";

// import useNodeStats from "../hooks/useNodeStats";


// const navigation = [
//   {
//     id: "profile",
//     label: "PROFILE",
//     icon: User,
//   },
//   {
//     id: "about",
//     label: "ABOUT",
//     icon: BookOpen,
//   },
//   {
//     id: "experience",
//     label: "EXPERIENCE",
//     icon: Briefcase,
//   },
//   {
//     id: "stack",
//     label: "STACK",
//     icon: Algorithm,
//   },
//   {
//     id: "projects",
//     label: "PROJECTS",
//     icon: Folder,
//   },
//   {
//     id: "contact",
//     label: "CONTACT",
//     icon: Mail,
//   },
// ];


// function SideNav() {
//   const [showInfo, setShowInfo] = useState(false);

//   const stats = useNodeStats();


//   const handleNavigation = (id) => {
//     setShowInfo(false);

//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };


//   return (
//     <aside className="side-nav">

//       {/* =========================================
//           HEADER
//       ========================================= */}

//       <div className="side-nav-header">

//         <span className="side-nav-logo">
//           A
//         </span>

//         <div className="side-nav-title">

//           <span>
//             ARJIT.SPACE
//           </span>

//           <small>
//             SYSTEM INTERFACE
//           </small>

//         </div>

//       </div>


//       {/* =========================================
//           NAVIGATION
//       ========================================= */}

//       <nav className="side-nav-links">

//         {navigation.map((item, index) => {

//           const Icon = item.icon;

//           return (
//             <button
//               key={item.id}
//               type="button"
//               className={`side-nav-link ${
//                 index === 0 ? "active" : ""
//               }`}
//               onClick={() => handleNavigation(item.id)}
//             >

//               <span className="side-nav-icon">
//                 <Icon
//                   width={24}
//                   height={24}
//                 />
//               </span>

//               <span className="side-nav-label">
//                 {item.label}
//               </span>

//             </button>
//           );

//         })}

//       </nav>


//       {/* =========================================
//           SYSTEM STATUS
//       ========================================= */}

//       <div className="side-nav-bottom">

//         {/* Expanded node information */}

//         <div className="node-status">

//           <span className="status-indicator" />

//           <div className="node-info">

//             <span>
//               NODE
//             </span>

//             <strong>
//               {stats.status}
//             </strong>

//             <small>
//               CPU {stats.cpu}%
//             </small>

//           </div>

//         </div>


//         {/* Info button */}

//         <button
//           type="button"
//           className={`info-button ${
//             showInfo ? "info-button-active" : ""
//           }`}
//           aria-label="System information"
//           aria-expanded={showInfo}
//           onClick={() => setShowInfo((value) => !value)}
//         >
//           i
//         </button>


//         {/* =====================================
//             SYSTEM POPUP
//         ===================================== */}

//         {showInfo && (

//           <div className="node-popup">

//             <div className="node-popup-header">

//               <span>
//                 HOME NODE
//               </span>

//               <button
//                 type="button"
//                 className="node-popup-close"
//                 onClick={() => setShowInfo(false)}
//                 aria-label="Close system information"
//               >
//                 ×
//               </button>

//             </div>


//             <div className="node-popup-status">

//               <span className="status-indicator" />

//               <span>
//                 SYSTEM ONLINE
//               </span>

//             </div>


//             <div className="node-stat">

//               <span>
//                 CPU
//               </span>

//               <strong>
//                 {stats.cpu}%
//               </strong>

//             </div>


//             <div className="node-stat">

//               <span>
//                 MEMORY
//               </span>

//               <strong>
//                 {stats.memory}%
//               </strong>

//             </div>


//             <div className="node-stat">

//               <span>
//                 CONTAINERS
//               </span>

//               <strong>
//                 {stats.containers}
//               </strong>

//             </div>


//             <div className="node-stat">

//               <span>
//                 UPTIME
//               </span>

//               <strong>
//                 {stats.uptime}
//               </strong>

//             </div>


//             <div className="node-stat">

//               <span>
//                 STATUS
//               </span>

//               <strong className="node-online">
//                 {stats.status}
//               </strong>

//             </div>


//             <div className="node-popup-footer">

//   <span className="node-warning">
//     HOSTED FROM HOME NODE
//   </span>

//   <p>
//     No cloud magic involved.
//     <br />
//     If this is offline, I probably
//     broke something.
//   </p>

// </div>

//           </div>

//         )}

//       </div>

//     </aside>
//   );
// }


// export default SideNav;

import { useEffect, useState } from "react";

import {
  User,
  BookOpen,
  Briefcase,
  Algorithm,
  Folder,
  Mail,
} from "pixelarticons/react";

import useNodeStats from "../hooks/useNodeStats";

const navigation = [
  { id: "profile", label: "PROFILE", icon: User },
  { id: "about", label: "ABOUT", icon: BookOpen },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "stack", label: "STACK", icon: Algorithm },
  { id: "projects", label: "PROJECTS", icon: Folder },
  { id: "contact", label: "CONTACT", icon: Mail },
];

function SideNav() {
  const [activeSection, setActiveSection] = useState("profile");
  const [showInfo, setShowInfo] = useState(false);

  const stats = useNodeStats();

  const handleNavigation = (id) => {
    setActiveSection(id);
    setShowInfo(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
   * Detect which section is currently visible.
   */
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: document.querySelector(".viewport"),
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="side-nav">

      {/* HEADER */}

      <div className="side-nav-header">

        <button
          type="button"
          className={`side-nav-logo ${
            activeSection === "profile" ? "active" : ""
          }`}
          onClick={() => handleNavigation("profile")}
        >
          A
        </button>

        <div className="side-nav-title">
          <span>ARJIT.SPACE</span>
          <small>SYSTEM INTERFACE</small>
        </div>

      </div>


      {/* NAVIGATION */}

      <nav className="side-nav-links">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              className={`side-nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.id)}
            >

              <span className="side-nav-icon">
                <Icon
                  width={24}
                  height={24}
                />
              </span>

              <span className="side-nav-label">
                {item.label}
              </span>

            </button>
          );
        })}

      </nav>


      {/* NODE */}

      <div className="side-nav-bottom">

        <div className="node-status">

          <span className="status-indicator" />

          <div className="node-info">

            <span>NODE</span>

            <strong>
              {stats.status}
            </strong>

            <small>
              CPU {stats.cpu}%
            </small>

          </div>

        </div>


        <button
          type="button"
          className={`info-button ${
            showInfo ? "info-button-active" : ""
          }`}
          aria-label="System information"
          aria-expanded={showInfo}
          onClick={() => setShowInfo((value) => !value)}
        >
          i
        </button>


        {showInfo && (

          <div className="node-popup">

            <div className="node-popup-header">
              <span>HOME NODE</span>

              <button
                type="button"
                className="node-popup-close"
                onClick={() => setShowInfo(false)}
              >
                ×
              </button>
            </div>

            <div className="node-popup-status">
              <span className="status-indicator" />
              <span>SYSTEM ONLINE</span>
            </div>

            <div className="node-stat">
              <span>CPU</span>
              <strong>{stats.cpu}%</strong>
            </div>

            <div className="node-stat">
              <span>MEMORY</span>
              <strong>{stats.memory}%</strong>
            </div>

            <div className="node-stat">
              <span>CONTAINERS</span>
              <strong>{stats.containers}</strong>
            </div>

            <div className="node-stat">
              <span>UPTIME</span>
              <strong>{stats.uptime}</strong>
            </div>

            <div className="node-stat">
              <span>STATUS</span>
              <strong className="node-online">
                {stats.status}
              </strong>
            </div>

            <div className="node-popup-footer">
              <span>
                HOSTED FROM HOME NODE
              </span>

              <p>
                No cloud magic involved.
                <br />
                If this is offline, I probably
                <br />
                broke something.
              </p>
            </div>

          </div>

        )}

      </div>

    </aside>
  );
}

export default SideNav;