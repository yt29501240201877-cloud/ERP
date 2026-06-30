// import { Outlet } from "react-router-dom"
import Style from "./users.module.css"
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react"
import api from '../../components/api'

const USERS_PER_PAGE = 5;

function SkeletonRow() {
  return (
    <tr>
      {["5%", "25%", "12%", "10%", "10%", "13%", "10%"].map((w, i) => (
        <td key={i}>
          <div className="skeleton" style={{ width: w, height: 12, borderRadius: 4 }} />
        </td>
      ))}
    </tr>
  );
}

export default function UserManagement() {
  const [page, setPage] = useState(1);
  const [user, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  async function loadUsers(pageNum) {
    try {
      setLoading(true);
      const res = await api.get(`/dashboard/users?page=${pageNum}`);

      setUsers(res.data.user);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  const filteredUsers = statusFilter === "All Statuses" ? user : user.filter(user => user.is_active === statusFilter);

  const allSelected = user.length > 0 && user.every((u) => selected.includes(u.id));

  function toggleAll() {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) user.forEach((u) => next.delete(u.id));
      else user.forEach((u) => next.add(u.id));
      return next;
    });
  }

function toggleRow(id) {
  if (selected.includes(id)) {
    setSelected(selected.filter(item => item !== id));
  } else {
    setSelected([...selected, id]);
  }
}

  return (
    <div className={Style.workspace}>
      <div className={Style.pagehead}>
        <div>
          <h2>User Management</h2>
          <p>Manage organization access, roles, and security permissions.</p>
        </div>
        <NavLink to="/Dashboard/New_user">
          <button className={Style.btnprimaryapp}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"20px"}}>add</span>Add New User</button>
        </NavLink>
      </div>
      <div className={Style.stats}>
        <div className={Style.stat}><div><p className="lbl label-caps text-muted-c" style={{color:"var(--on-surface-variant)"}}>Total Users</p><p className={Style.val}>1,284</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.textprimarycontainerc}`}>groups</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Active Now</p><p className={Style.val}>342</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.texttertiaryc}`}>bolt</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Pending Invites</p><p className={Style.val}>12</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.textoutlinec}`}>mail</span></div>
        <div className={Style.stat}><div><p className="lbl label-caps" style={{color:"var(--on-surface-variant)"}}>Access Requests</p><p className={`${Style.val} ${Style.texterrorc}`}>5</p></div><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined ${Style.texterrorc}`}>lock_open</span></div>
      </div>
      <div className={Style.filterbar}>
        <div className={Style.filterinput}>
          <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>filter_list</span>
          <input type="text" placeholder="Filter by name, email or department..."/>
        </div>
          <select>
            <option>All Roles</option><option>Admin</option><option>Accountant</option><option>Manager</option><option>Employee</option>
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All Statuses</option><option>Active</option><option>Inactive</option><option>Suspended</option>
          </select>
          <button className={Style.btnoutlineapp}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"18px"}}>file_download</span>Export</button>
      </div>
      <div className={Style.tablecard}>
        <div className="table-scroll">
          <table className={Style.usertable}>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Select all users"/> 
                </th>
                <th>Name &amp; email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last login</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (Array.from({ length: USERS_PER_PAGE }, (_, i) => <SkeletonRow key={i} />)) : error ? (
                <tr>
                  <td colSpan={7}>
                    <div className="error-state">
                      <p>Failed to load users: {error}</p>
                      <button onClick={() => loadUsers(page)}>Retry</button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className={selected.includes(user.id) ? "row-selected" : ""}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selected.includes(user.id)}
                        onChange={() => toggleRow(user.id)}
                        aria-label={`Select ${user.name}`}
                      />
                    </td>

                    <td>
                      <div className={Style.usercell}>
                        <img src={`http://localhost:4000/${user.image.replace(/\\/g, "/")}`} alt={user.name} className={Style.avatar}/>
                        <div>
                          <p className={Style.username}>{user.first_name} {user.last_name}</p>
                          <p className={Style.useremail}>{user.email}</p>
                        </div>
                      </div>
                    </td>

                    <td><span className={`${Style.rolebadge} ${Style[user.role.replace(/\s+/g, "")]}`}>{user.role}</span></td>
                    <td><span className={`${Style.statusbadge} ${Style[user.is_active]}`}>{user.is_active}</span></td>
                    <td className="last-login">{user.last_login}</td>

                    <td>
                      <div className={Style.rowactions}>
                        <button><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"20px"}}>edit</span></button>
                        <button><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"20px"}}>lock_reset</span></button>
                        <button><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`} style={{fontSize:"20px"}}>more_vert</span></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>{page}</span>
        <button disabled={page * 5 >= total} onClick={() => setPage(page + 1)}>Next</button> */}
      </div>
    </div>
  )
}