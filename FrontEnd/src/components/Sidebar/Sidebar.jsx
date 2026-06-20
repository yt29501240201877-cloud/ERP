import Style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className={Style.sidebar}>
        <div className={Style.brand}>
            <div className={Style.brandlogo}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>account_balance</span></div>
                <div>
                    <h1>Flugur ERP</h1>
                    <small>Precision Ledger</small>
                </div>
        </div>
            <nav className={Style.navlist}>
                <NavLink to="/Dashboard" className={Style.navitem}>
                    <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>dashboard</span>
                    <span>Dashboard</span>
                </NavLink>

                {/* <NavLink to="/accounting" className={Style.navitem}>
                    <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>
                        account_balance_wallet
                    </span>
                    <span>Accounting</span>
                </NavLink> */}

                <NavLink to="/reports" className={Style.navitem}>
                    <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>
                        description
                    </span>
                    <span>Reports</span>
                </NavLink>

                <NavLink to="/Dashboard/users" className={Style.navitem}>
                    <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined icon-fill`}>group</span>
                    <span>User Management</span>
                </NavLink>

                <NavLink to="/settings" className={Style.navitem}>
                    <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>settings</span>
                    <span>Settings</span>
                </NavLink>



            </nav>
        <div className={Style.sidebarfooter}>
            <div className={Style.profile}>
                <div className={Style.avatarimg} ></div>

                <div className= "flex-grow-1" style={{ minWidth: 0 }}>
                    <p className={`${Style.truncate} mb-0`} style={{ fontWeight:"700", fontSize:"13px"}}>David Miller</p>
                    <p className={`${Style.truncate} mb-0`} style={{ fontSize: "11px", color: "var(--on-surface-variant)"}}>Super Admin</p>
                </div>
                <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}  style={{ color: "var(--on-surface)", cursor: "pointer"}}>logout</span>
            </div>
        </div>
  </aside>
  )
}





