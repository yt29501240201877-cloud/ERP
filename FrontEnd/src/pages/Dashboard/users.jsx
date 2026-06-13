// import { Outlet } from "react-router-dom"
import Style from "./users.module.css"

export default function UserManagement() {
  return (
    <div className={Style.workspace}>
      <div className={Style.pagehead}>
        <div>
          <h2>User Management</h2>
          <p>Manage organization access, roles, and security permissions.</p>
        </div>
        <button className={Style.btnprimaryapp}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"20px"}}>add</span>Add New User</button>
      </div>
      <div className={Style.stats}>
        <div className={Style.stat}><div><p className="lbl label-caps text-muted-c" style={{color:"var(--on-surface-variant)"}}>Total Users</p><p className={Style.val}>1,284</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.textprimarycontainerc}`}>groups</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Active Now</p><p className={Style.val}>342</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.texttertiaryc}`}>bolt</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Pending Invites</p><p className={Style.val}>12</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.textoutlinec}`}>mail</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Access Requests</p><p className={`${Style.val} ${Style.texterrorc}`}>5</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.texterrorc}`}>lock_open</span></div>
      </div>
    </div>
  )
}




      {/* <div className="stats">
        <div className="stat"><div><p className="lbl label-caps text-muted-c" style={{color:"var(--on-surface-variant)"}}>Total Users</p><p className="val">1,284</p></div><span className="material-symbols-outlined text-primary-container-c">groups</span></div>
        <div className="stat"><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Active Now</p><p className="val">342</p></div><span className="material-symbols-outlined text-tertiary-c">bolt</span></div>
        <div className="stat"><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Pending Invites</p><p className="val">12</p></div><span className="material-symbols-outlined text-outline-c">mail</span></div>
        <div className="stat"><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Access Requests</p><p className="val text-error-c">5</p></div><span className="material-symbols-outlined text-error-c">lock_open</span></div>
      </div>

      <div className="filter-bar">
        <div className="filter-input">
          <span className="material-symbols-outlined">filter_list</span>
          <input type="text" placeholder="Filter by name, email or department..."/>
        </div>
        <select>
          <option>All Roles</option><option>Admin</option><option>Accountant</option><option>Manager</option><option>Employee</option>
        </select>
        <select>
          <option>All Statuses</option><option>Active</option><option>Inactive</option><option>Pending</option>
        </select>
        <button className="btn-outline-app"><span className="material-symbols-outlined" style="font-size:18px">file_download</span>Export</button>
      </div>

      <div className="table-card">
        <table className="user-table">
          <thead>
            <tr>
              <th><input type="checkbox" className="form-check-input"/></th>
              <th>Name &amp; Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" className="form-check-input"/></td>
              <td>
                <div className="user-cell">
                  <div className="avatar" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbIeg9rUzAi0WBttibT0PvbGI3EBqI7cbr3HQXbaGoQ0-Hb4VuErdZ2U4OKvgHkbvS-xUKL7y-UJoEIHUvsvHnoVgWoAuLx1AarnCOfbrlGpEF1x6FaNwd6kic0KaY7VoQ7NsdRvboiivWpAhW6L0LCerki30G7Ic5SpGUFl-l2t8Z5FdsyOlJWkpMAs4224ya0QrrmLyDJvI-VbCA46NGPL0zqX1HF6f_u3Zm6BVTSvZxwHaVwgfp_f1oR-nw-dhUdK-1PjhU0ps')"></div>
                  <div><p className="user-name">Alex Rivera</p><p className="user-email">alex.r@ledgerpro.com</p></div>
                </div>
              </td>
              <td><span className="role-badge role-admin">Admin</span></td>
              <td>IT</td>
              <td><span className="status status-active"><span className="d"></span>Active</span></td>
              <td><span style={{"font-size:13px;color:var(--on-surface-variant);font-weight:500"}}>2 mins ago</span></td>
              <td><div className="row-actions"><button><span className="material-symbols-outlined" style="font-size:20px">edit</span></button><button><span className="material-symbols-outlined" style="font-size:20px">lock_reset</span></button><button><span className="material-symbols-outlined" style="font-size:20px">more_vert</span></button></div></td>
            </tr>
            <tr>
              <td><input type="checkbox" className="form-check-input"/></td>
              <td>
                <div className="user-cell">
                  <div className="avatar" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVAj5vDLP-ct1AGFs-cum11pNCVjk7xeMq8p75mTBzEVjOmJ8J3qZaJPpqovxQ7O0OQn9QYR-sh8P8SPJ-06YeN49RoehbOoq-ycN_0VJzjkeGgM1HGppRGqzQbTUoAlQ3gXCH2ndlKMqi2k8OxZrvsWDb0toN7-Cp1C_wWhaODzxllC77BlXHX02n0xh9COtm4oeotldTzImRQtAGHp_iyC-9mNTsJiff6dMIgFZJhK2kIgANxpq-Ykbj0t7cs__-6NObgsmz0Vo')"></div>
                  <div><p className="user-name">Sarah Chen</p><p className="user-email">s.chen@ledgerpro.com</p></div>
                </div>
              </td>
              <td><span className="role-badge role-accountant">Accountant</span></td>
              <td>Finance</td>
              <td><span className="status status-active"><span className="d"></span>Active</span></td>
              <td><span style="font-size:13px;color:var(--on-surface-variant);font-weight:500">1 hour ago</span></td>
              <td><div className="row-actions"><button><span className="material-symbols-outlined" style="font-size:20px">edit</span></button><button><span className="material-symbols-outlined" style="font-size:20px">lock_reset</span></button><button><span className="material-symbols-outlined" style="font-size:20px">more_vert</span></button></div></td>
            </tr>
            <tr>
              <td><input type="checkbox" className="form-check-input"/></td>
              <td>
                <div className="user-cell">
                  <div className="avatar av-neutral">JS</div>
                  <div><p className="user-name">Jordan Smyth</p><p className="user-email">j.smyth@ledgerpro.com</p></div>
                </div>
              </td>
              <td><span className="role-badge role-manager">Manager</span></td>
              <td>Sales</td>
              <td><span className="status status-pending"><span className="d"></span>Pending</span></td>
              <td><span style="font-size:13px;color:var(--on-surface-variant);font-weight:500">Yesterday</span></td>
              <td><div className="row-actions"><button><span className="material-symbols-outlined" style="font-size:20px">edit</span></button><button><span className="material-symbols-outlined" style="font-size:20px">lock_reset</span></button><button><span className="material-symbols-outlined" style="font-size:20px">more_vert</span></button></div></td>
            </tr>
            <tr>
              <td><input type="checkbox" className="form-check-input"/></td>
              <td>
                <div className="user-cell">
                  <div className="avatar" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVJ1-kV2egq5fkw6iwdwHQFVABco205GnA67g0tUIPJTbZ9nDP2uy0xr72QTQT4By419SpF5stChU8VjxMwSYkoSJTRhFVRamvJF3-iTw8Tmsz0F385rktNaVeJD9oO45fWMnrYxNtnRfOo1eLz9hMkCkfAbCstYNsF4IXj5Ut7qH4D8Za3H0yLVSs8Vohjw5j3j1EXWzaHAh6gWB3oq6MpBrbeglumgjDROeULLIPDmt4J6INseDH-pIWGaUYWCSXGaAebrYnc2w')"></div>
                  <div><p className="user-name">Taylor Reed</p><p className="user-email">t.reed@ledgerpro.com</p></div>
                </div>
              </td>
              <td><span className="role-badge role-employee">Employee</span></td>
              <td>HR</td>
              <td><span className="status status-inactive"><span className="d"></span>Inactive</span></td>
              <td><span style="font-size:13px;color:var(--on-surface-variant);font-weight:500">3 days ago</span></td>
              <td><div className="row-actions"><button><span className="material-symbols-outlined" style="font-size:20px">edit</span></button><button><span className="material-symbols-outlined" style="font-size:20px">lock_reset</span></button><button><span className="material-symbols-outlined" style="font-size:20px">more_vert</span></button></div></td>
            </tr>
            <tr>
              <td><input type="checkbox" className="form-check-input"/></td>
              <td>
                <div className="user-cell">
                  <div className="avatar av-primary">MD</div>
                  <div><p className="user-name">Marcus Dupont</p><p className="user-email">m.dupont@ledgerpro.com</p></div>
                </div>
              </td>
              <td><span className="role-badge role-admin">Admin</span></td>
              <td>IT</td>
              <td><span className="status status-active"><span className="d"></span>Active</span></td>
              <td><span style="font-size:13px;color:var(--on-surface-variant);font-weight:500">10 mins ago</span></td>
              <td><div className="row-actions"><button><span className="material-symbols-outlined" style="font-size:20px">edit</span></button><button><span className="material-symbols-outlined" style="font-size:20px">lock_reset</span></button><button><span className="material-symbols-outlined" style="font-size:20px">more_vert</span></button></div></td>
            </tr>
          </tbody>
        </table>

        <div className="pager">
          <p className="pager-text">Showing <b>1 - 5</b> of <b>1,284</b> users</p>
          <div className="pages">
            <button className="page-btn" disabled><span className="material-symbols-outlined" style="font-size:18px">chevron_left</span></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style="padding:0 8px;color:var(--on-surface-variant)">...</span>
            <button className="page-btn">257</button>
            <button className="page-btn"><span className="material-symbols-outlined" style="font-size:18px">chevron_right</span></button>
          </div>
        </div>
      </div>

      <div className="footnote">
        <span className="material-symbols-outlined" style="font-size:16px;color:var(--on-surface-variant)">info</span>
        <p>Data integrity audit logged at 2023-11-24 14:02:15 UTC. All administrative actions are recorded in the system audit trail.</p>
      </div> */}