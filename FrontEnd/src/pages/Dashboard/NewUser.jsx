import { useState, useRef } from "react";
import Style from "./users.module.css"
import api from "../../components/api";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const S = {
  inputErr: { border: "1px solid #ef4444" },
  errMsg: { fontSize: 12, color: "#ef4444", marginTop: 4 },

  toast: (visible) => ({
    position: "fixed", bottom: 28, right: 28,
    background: "#111827", color: "#fff",
    padding: "13px 20px", borderRadius: 10,
    fontSize: 14, fontWeight: 500,
    boxShadow: "0 4px 16px rgba(0,0,0,.25)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: "opacity .3s, transform .3s",
    pointerEvents: "none", zIndex: 9999,
  }),
};

export default function NewUser() {
  const [form, setForm] = useState({
    firstName:  "",
    lastName:   "",
    email:      "",
    password:   "",
    role:       "",
    avatar:     null,  
    avatarFile: null,
  });

  const [errors,      setErrors]      = useState({});
  const [showPwd,     setShowPwd]     = useState(false);
  const [toast,       setToast]       = useState({ visible: false, msg: "" });

  const fileRef = useRef(null);

  function showToast(msg) {
    setToast({ visible: true, msg });
    setTimeout(() => setToast({ visible: false, msg: "" }), 3000);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: "" }));
  }

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setErrors(err => ({ ...err, avatar: "Only JPG or PNG allowed." }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors(err => ({ ...err, avatar: "File must be under 2 MB." }));
      return;
    }

    const reader = new FileReader();
    reader.onload = ev => {
      setForm(f => ({ ...f, avatar: ev.target.result, avatarFile: file }));
      setErrors(err => ({ ...err, avatar: "" }));
    };
    reader.readAsDataURL(file);
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim())       e.firstName = "First name is required.";
    if (!form.lastName.trim())        e.lastName  = "Last name is required.";
    if (!form.email.trim())           e.email     = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) e.email  = "Enter a valid email address.";
    if (!form.password)               e.password  = "Password is required.";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    if (!form.role)                   e.role      = "Please assign a role.";
    return e;
  }

  function handleCancel() {
    setForm({ firstName:"", lastName:"", email:"", password:"", role:"", avatar:null, avatarFile:null });
    setErrors({});
    setShowPwd(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  const handleSubmit = async () => {
  const e = validate();

  if (Object.keys(e).length > 0) {
    setErrors(e);
    return;
  }

  const formData = new FormData();

  formData.append("first_name", form.firstName);
  formData.append("last_name", form.lastName);
  formData.append("email", form.email);
  formData.append("password", form.password);
  formData.append("role", form.role);

  if (form.avatarFile) {
    formData.append("image", form.avatarFile);
  }

  try {
    await api.post("dashboard/register", formData);
    
    showToast("✓ User created successfully!");
    handleCancel();

  } catch (error) {
    console.log(error.response?.data);

    if (error.response?.data?.msg) {
      showToast(error.response.data.msg);
    } else {
      showToast("Something went wrong.");
    }
  }
};

  return (
    <div className={Style.workspace}>
      <div className={Style.crumbs}>User Management <span className={Style.sep}>›</span><span className={Style.current}> Add New User</span></div>
      <h2 className={Style.pagetitle}>Add New User</h2>
      <p className={Style.pagesub}>Fill in the information below to create a new user account and assign permissions within the Flugur ERP.</p>

      <div className={Style.cardbox}>
        <div className={Style.sectionlabel}>
          <i className="bi bi-person"/> Basic Information
        </div>
        <div className={Style.profilerow}>
          <div className={Style.profilepic} title="Click to upload photo" onClick={() => fileRef.current?.click()}>
            {form.avatar ? <img src={form.avatar} alt="avatar" className={Style.profileimg} /> : <i className="bi bi-person-circle" />} 
          </div>
          <div className={Style.profileinfo}>
            <strong className={Style.profilestrong}>Profile Picture</strong>
            <button className={Style.uploadbtn} type="button" onClick={() => fileRef.current?.click()}>Upload Photo</button>
            <span className={S.hint}>JPG or PNG, max 2 MB</span>
            {errors.avatar && <span className={Style.errMsg}>{errors.avatar}</span>}
          </div>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png" style={{ display: "none" }} onChange={handleAvatarChange}/>
          </div>
         <div className="row g-3">
           <div className="col-md-6">
            <label className={`${Style.formlabel} ${Style.req}`}>First Name</label>
            <input name="firstName" className="form-control" value={form.firstName} onChange={handleChange} placeholder="e.g. Sarah"/>
            {errors.firstName && <div style={S.errMsg}>{errors.firstName}</div>}
          </div>
          
          <div className="col-md-6">
            <label className={`${Style.formlabel} ${Style.req}`}>Last Name</label>
            <input name="lastName" className="form-control" value={form.lastName} onChange={handleChange} placeholder="e.g. Jenkins"/>
            {errors.lastName && <div style={S.errMsg}>{errors.lastName}</div>}
          </div>
        </div>

         <div className="mt-3">
           <label className={`${Style.formlabel} ${Style.req}`}>Email Address</label>
          <input name="email" className="form-control" type="email" value={form.email} onChange={handleChange} placeholder="e.g. sarah.j@company.com"/>
          {errors.email && <div style={S.errMsg}>{errors.email}</div>}
        </div>

      <div className={`${Style.sectionlabel} mt-4`}><i className="bi bi-lock"></i> Security & Access</div>

         <div className="mb-2">
           <label className={`${Style.formlabel} ${Style.req}`}>Initial Password</label>
           <div className={Style.passwordwrap}>
            <input name="password" className="form-control" type={showPwd ? "text" : "password"} value={form.password} onChange={handleChange} placeholder="Min. 8 characters"/>
            <button type="button" className={Style.eye} onClick={() => setShowPwd(v => !v)} title={showPwd ? "Hide password" : "Show password"}>
              <i className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`} />
            </button>
          </div>
        </div>

         <div className="row g-3 mt-2">
           <div className="col-md-6">
             <label className={`${Style.formlabel} ${Style.req}`}>Assign Role</label>
            <select name="role" className={Style.formselect} value={form.role} onChange={handleChange}>
              <option value="">Select an access level</option><option value="Admin">Admin</option>
              <option value="editor">Editor</option><option value="viewer">Viewer</option> 
            </select>
            {errors.role && <div style={S.errMsg}>{errors.role}</div>}
          </div>
        </div>

         <div className={Style.actions}>
           <span className={Style.reqnote}>Fields marked with <span style={{color:"#e11d48"}}>*</span> are mandatory.</span>
           <div className="d-flex gap-2">
            <button type="button" className={Style.btncancel} onClick={handleCancel}>Cancel</button>
            <button type="button" className={Style.btncreate} onClick={handleSubmit}> Create User</button>
          </div>
        </div>
      </div>

      <div style={S.toast(toast.visible)}>{toast.msg}</div>
    </div>
  );
}
