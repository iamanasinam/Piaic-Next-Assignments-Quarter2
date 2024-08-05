import styles from "./page.module.css"
  let name = "Anas Inam"
const page = ()=>{
  return(
    <div style={{backgroundColor: "white"}}>
    <span ><h1 className={styles.title}>Hello, from {name}</h1></span>
    <h2 >Hello, from {name}</h2>
    <span style = {{border : "2px solid red"}}>testing the span</span>
    </div>
  )
}


export default page