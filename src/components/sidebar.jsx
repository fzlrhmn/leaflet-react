import React, {Component} from 'react';

class Sidebar extends Component {
  renderMenu(menu, index) {
    return (
        <li className="nav-item" key={index}>
        <a className="nav-link" onClick={(i) => this.props.onClick(menu)}>
          {menu.name}
        </a>
      </li>
    )
  }

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {this.props.sidebarMenu.map((t, index) => { return this.renderMenu(t, index) })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Sidebar;