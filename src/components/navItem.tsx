import * as React from 'react';

const NavItem = ({ title, scrollspyId, active }) => {
  let classAttributes =
    "flex flex-wrap justify-center content-center text-gray-100 hover:text-gray-100 hover:text-opacity-60 whitespace-nowrap";
  if (!active) {
    classAttributes += " text-opacity-20 border-l-4 border-transparent";
  } else {
    classAttributes += " text-opacity-60";
  }

  console.log(title, scrollspyId);

  return (
    <div className={classAttributes} style={{ height: "33vh" }}>
      <p data-to-scrollspy-id={scrollspyId} className="w-auto">
        {title}
      </p>
    </div>
  );
};

export default NavItem;
