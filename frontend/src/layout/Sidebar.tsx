const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
      <h4 className="text-center">ERP Schools</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">Estudiantes</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">Profesores</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
