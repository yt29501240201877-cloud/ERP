import Style from './Topbar.module.css'

export default function Topbar() {
  return (

        <div className={Style.topbar}>
            <div className={Style.search}>
                <span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>search</span>
                <input type="text" placeholder="Global search for transactions, users, or accounts..."/>
            </div>
            <div className={Style.topbaractions}>
                <button className={Style.iconbtn}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>notifications</span><span className={Style.dot}></span></button>
                <button className={Style.iconbtn}><span className={`${Style.materialsymbolsoutlined} material-symbols-outlined`}>help_outline</span></button>
                <div className={Style.dividerv}></div>
                <div className={`d-flex align-items-center gap-2`}>
                  <span style={{fontSize:"13px", fontWeight:"500"}}>System Status:</span>
                  <span className={Style.statuspill}><span className={Style.pulse}></span> Operational</span>
                </div>
            </div>
        </div>
  )
}
